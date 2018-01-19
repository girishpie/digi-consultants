package application.category;

import application.response.IResponse;
import application.response.ResponseWrapper;
import application.response.RestError;
import application.response.RestResponse;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.RequestEntity;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.xml.ws.Response;

import java.util.ArrayList;
import java.util.Iterator;
import java.util.List;
import java.util.Map;
import java.util.Map.Entry;

/**
 * Created by gipai on 10/1/2017.
 */
@RestController
@RequestMapping("/api/category")
public class CategoryController {

    @Autowired
    private CategoryRepository categoryRepository;

    @RequestMapping(method = RequestMethod.POST)
    ResponseEntity<IResponse> add(@RequestBody Category input){
        if(input.getName()== null || input.getName().isEmpty()){
            return ResponseWrapper.getResponse(new RestError( HttpStatus.BAD_REQUEST, "CATEGORY_NAME_NULL"));
        }
        input = categoryRepository.save(input);

        return ResponseWrapper.getResponse(new RestResponse(input));

    }

    private Category getParentSubCategory(Category rootCategory,String path)
    {
        Map<String , Category> categories = rootCategory.getSubCategories();
        String[] paths = path.split(":");
        for (Map.Entry<String, Category> entry : categories.entrySet()) {
           if(entry.getKey().equals(paths[0]) ){
               if(!path.contains(":")){
                   return entry.getValue();
               }
               else {
                   path = path.substring(path.indexOf(':')+1,path.length());
                   return getParentSubCategory(entry.getValue(),path);
               }
           }
        }
        return null;
    }

    @RequestMapping(value = "/{parentCategoryId}/" ,method = RequestMethod.POST)
    ResponseEntity<IResponse> addSubCategoryWithNoParent(@PathVariable String parentCategoryId, @RequestBody Category input){
        if(input.getName()== null || input.getName().isEmpty()){
            return ResponseWrapper.getResponse(new RestError(HttpStatus.BAD_REQUEST, "SUBCATEGORY_NAME_NULL"));
        }
        Category parentCategory = categoryRepository.findById(parentCategoryId);
        if(parentCategory == null){
            return ResponseWrapper.getResponse(new RestError( HttpStatus.BAD_REQUEST, "PARENTCATEGORY_NOT_EXSITS", parentCategoryId));
        }

        boolean isSucess = parentCategory.addSubCategory(input);
        if(!isSucess){
            return ResponseWrapper.getResponse(new RestError( HttpStatus.BAD_REQUEST, "SUBCATEGORY_NAME_EXISTS",  input.getName() ));
        }
        input = categoryRepository.save(parentCategory);
        return ResponseWrapper.getResponse(new RestResponse(input));

    }


    @RequestMapping(value = "/{parentCategoryId}/{path}" ,method = RequestMethod.POST)
    ResponseEntity<IResponse> addSubCategoryWithParent(@PathVariable String parentCategoryId,@PathVariable String path, @RequestBody Category input){
        if(input.getName()== null || input.getName().isEmpty()){
            return ResponseWrapper.getResponse(new RestError(HttpStatus.BAD_REQUEST, "SUBCATEGORY_NAME_NULL"));
        }
        Category parentCategory = categoryRepository.findById(parentCategoryId);
        if(parentCategory == null){
            return ResponseWrapper.getResponse(new RestError(HttpStatus.BAD_REQUEST, "PARENTCATEGORY_NOT_EXSITS", parentCategoryId));

        }
        Category subCategoryParent = getParentSubCategory(parentCategory,path);
        if(subCategoryParent == null){
            return ResponseWrapper.getResponse(new RestError(HttpStatus.BAD_REQUEST, "PATH_NOT_FOUND ", path));

        }
        boolean isSucess = subCategoryParent.addSubCategory(input);
        if(!isSucess){
            return ResponseWrapper.getResponse(new RestError(HttpStatus.BAD_REQUEST, "SUBCATEGORY_NAME_EXISTS",  input.getName() ));
        }
        input = categoryRepository.save(parentCategory);
        return ResponseWrapper.getResponse(new RestResponse(input));

    }



//    @RequestMapping(value = "/{categoryId}" ,method = RequestMethod.GET)
//    ResponseEntity<IResponse> get(@PathVariable String categoryId){
//        if(categoryId== null || categoryId.isEmpty()){
//            return ResponseWrapper.getResponse(new RestError("Id of category must not be null or empty", HttpStatus.BAD_REQUEST));
//        }
//        Category category = categoryRepository.findById(categoryId);
//        if(category == null){
//            return ResponseWrapper.getResponse(new RestError("Parent Category with id: " + categoryId+  "does not exist", HttpStatus.NOT_FOUND));
//
//        }
//       return ResponseWrapper.getResponse(new RestResponse(category));
//
//    }


    @RequestMapping(value = "/{categoryId}/{path}" ,method = RequestMethod.GET)
    ResponseEntity<IResponse> get(@PathVariable String categoryId,@PathVariable String path){
        if(categoryId== null || categoryId.isEmpty()){
            return ResponseWrapper.getResponse(new RestError(HttpStatus.BAD_REQUEST, "CATEGORY_ID_NULL"));
        }
        Category category = categoryRepository.findById(categoryId);
        Category subCategoryParent = getParentSubCategory(category,path);
        if(subCategoryParent == null){
            return ResponseWrapper.getResponse(new RestError(HttpStatus.BAD_REQUEST, "PATH_NOT_FOUND", path));

        }
        if(category == null){
            return ResponseWrapper.getResponse(new RestError(HttpStatus.NOT_FOUND, "PARENTCATEGORY_NOT_EXSITS", categoryId));

        }
        return ResponseWrapper.getResponse(new RestResponse(subCategoryParent));

    }


    @RequestMapping(method = RequestMethod.GET)
    ResponseEntity<IResponse> get(){
        List<Category> categories = categoryRepository.findAll();
        if(categories.isEmpty()){
            return ResponseWrapper.getResponse(new RestError(HttpStatus.NOT_FOUND, "CATEGORIES_NOT_FOUND"));
        }
        List<CategoryDto> categoryDtos = new ArrayList<CategoryDto>();
        for(int i = 0; i < categories.size(); i++ ) {
        	List<String> subCatNames = new ArrayList<String>();
        	if(categories.get(i).getSubCategories() != null) {
         		for(Entry<String, Category> entry: categories.get(i).getSubCategories().entrySet()) {
        			subCatNames.add(entry.getValue().getName());
        	    }
        	}
        	categoryDtos.add(new CategoryDto(categories.get(i).getId(), categories.get(i).getName(), categories.get(i).getDescription(), subCatNames));
        }
        
        return ResponseWrapper.getResponse(new RestResponse(categoryDtos));
    }

    @RequestMapping(value = "/{categoryId}" ,method = RequestMethod.GET)
    ResponseEntity<IResponse> get(@PathVariable String categoryId){
    	List<Category> categories = categoryRepository.findAll();
        if(categories.isEmpty()){
            return ResponseWrapper.getResponse(new RestError(HttpStatus.NOT_FOUND, "CATEGORIES_NOT_FOUND"));
        }
        List<CategoryDto> categoryDtos = new ArrayList<CategoryDto>();
        for(int i = 0; i < categories.size(); i++ ) {
        	List<String> subCatNames = new ArrayList<String>();
        	if(categories.get(i).getSubCategories() != null) {
         		for(Entry<String, Category> entry: categories.get(i).getSubCategories().entrySet()) {
        			categoryDtos.add(new CategoryDto(entry.getValue().getName(), entry.getValue().getDescription(), categories.get(i).getName()));
        	    }
        	}
        }
        
        return ResponseWrapper.getResponse(new RestResponse(categoryDtos));
    }

    @RequestMapping(value = "/{categoryId}", method = RequestMethod.PATCH)
    ResponseEntity<IResponse> update(@PathVariable String categoryId, @RequestBody Category input){
        Category category = categoryRepository.findById(categoryId);
        if(category == null){
            return ResponseWrapper.getResponse(new RestError(HttpStatus.NOT_FOUND, "CATEGORY_UPDATE_FAIL",categoryId));
        }
        if(input.getName()== null || input.getName().isEmpty()){
        	return ResponseWrapper.getResponse(new RestError( HttpStatus.BAD_REQUEST, "CATEGORY_NAME_NULL"));
        }
        category.setName(input.getName());
        category.setDescription(input.getDescription());
        category.update();
        category = categoryRepository.save(category);
        return ResponseWrapper.getResponse(new RestResponse(category));
    }


    @RequestMapping(value = "/{categoryId}/{path}", method = RequestMethod.PATCH)
    ResponseEntity<IResponse> update(@PathVariable String categoryId, @PathVariable String path,@RequestBody Category input){
        Category category = categoryRepository.findById(categoryId);
        if(category == null){
            return ResponseWrapper.getResponse(new RestError(HttpStatus.NOT_FOUND, "CATEGORY_UPDATE_FAIL", categoryId));
        }
        Category subCategoryParent = getParentSubCategory(category,path);

        if(subCategoryParent == null){
            return ResponseWrapper.getResponse(new RestError(HttpStatus.BAD_REQUEST, "PATH_NOT_FOUND", path));

        }
        if(input.getName()== null || input.getName().isEmpty()){
        	return ResponseWrapper.getResponse(new RestError( HttpStatus.BAD_REQUEST, "SUBCATEGORY_NAME_NULL"));
        }
        subCategoryParent.setName(input.getName());
        subCategoryParent.setDescription(input.getDescription());
        category.update();
        category = categoryRepository.save(category);
        return ResponseWrapper.getResponse(new RestResponse(category));
    }


    @RequestMapping(value = "/{categoryId}", method = RequestMethod.DELETE)
    ResponseEntity<IResponse> delete(@PathVariable String categoryId,@RequestBody Category input){
        Category category = categoryRepository.findById(categoryId);
        if(category == null){
            return ResponseWrapper.getResponse(new RestError(HttpStatus.NOT_FOUND, "CATEGORY_NOT_EXSITS" , categoryId));
        }
        categoryRepository.delete(category);
        return ResponseWrapper.getResponse(new RestResponse(category));
    }

    @RequestMapping(value = "/{categoryId}/{path}", method = RequestMethod.DELETE)
    ResponseEntity<IResponse> deleteSubCategory(@PathVariable String categoryId,@PathVariable String path,@RequestBody Category input){
        Category category = categoryRepository.findById(categoryId);

        if(category == null){
            return ResponseWrapper.getResponse(new RestError(HttpStatus.NOT_FOUND, "CATEGORY_NOT_EXSITS", categoryId));
        }
        String[] paths = path.split(":");
        String subcategoryId = paths[paths.length-1];
        path = path.substring(0,path.length() - (subcategoryId.length()+1));
        Category subCategoryParent = getParentSubCategory(category,path);
        if(subCategoryParent == null){
            return ResponseWrapper.getResponse(new RestError( HttpStatus.BAD_REQUEST, "PATH_NOT_FOUND" , path));
        }
        subCategoryParent.removeSubCategory(subcategoryId);
        categoryRepository.save(category);
        return ResponseWrapper.getResponse(new RestResponse(category));
    }
}
