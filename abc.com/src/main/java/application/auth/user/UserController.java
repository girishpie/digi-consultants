package application.auth.user;

import application.response.*;
import application.auth.roles.Role;
import application.auth.roles.RoleRepository;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.List;

/**
 * Created by gipai on 9/28/2017.
 */
@RestController
@RequestMapping("/api/user")
public class UserController {

	@Autowired
    private final UserRepository userRepository;
	
	@Autowired
    private final RoleRepository roleRepository;

    
    public UserController(UserRepository userRepository, RoleRepository roleRepository) {
        this.userRepository = userRepository;
        this.roleRepository = roleRepository;
    }

    @PreAuthorize("hasAuthority('CREATE_USER')")
    @RequestMapping(method = RequestMethod.POST)
    ResponseEntity<IResponse> add(@RequestBody User input) {
        if(input.getUserId()== null || input.getUserId().isEmpty()){
            return ResponseWrapper.getResponse( new RestError(HttpStatus.BAD_REQUEST, "USER_ID_NULL"));
        }
        if(userRepository.findByUserId(input.getUserId())!= null) {
            return ResponseWrapper.getResponse( new RestError(HttpStatus.BAD_REQUEST, "USER_ID_EXISTS"));

        }
        User user = userRepository.save(input);
        return ResponseWrapper.getResponse( new RestResponse( user.getUserId()));

    }

    //TODO:Need to remove this later from production
    @RequestMapping(value = "/createsuperuser" , method = RequestMethod.POST)
    ResponseEntity<IResponse> addSuperUser() {

        Role role = new Role(true);
        role = roleRepository.save(role);
        List<String> roles= new ArrayList<String>();
        roles.add(role.getName());
        if(userRepository.findByUserId("superUser") == null){
            User user = userRepository.save(new User("superUser", "superUser", "superUser", "abc@abc.com", "123456",
                    "superPassword",roles));
            return ResponseWrapper.getResponse(new RestResponse( user.getUserId()));

        }
        return ResponseWrapper.getResponse( new RestError(HttpStatus.NOT_MODIFIED, "SUPERUSER_EXISTS"));

    }


    @PreAuthorize("hasAuthority('DELETE_USER')")
    @RequestMapping(value = "/{id}",method = RequestMethod.DELETE)
    ResponseEntity<?> delete(@PathVariable String id) {
        long res = userRepository.deleteById(id);
        return ResponseWrapper.getResponse( new RestResponse( id));
     }
    
    @PreAuthorize("hasAuthority('UPDATE_USER')")
    @RequestMapping(value = "/{id}", method = RequestMethod.PATCH)
    ResponseEntity<IResponse> update(@PathVariable String id, @RequestBody User input){
        User user = userRepository.findById(id);
        if(user == null){
            return ResponseWrapper.getResponse(new RestError(HttpStatus.NOT_FOUND, "USER_UPDATE_FAIL" , id));
        }
        if(input.getUserId()== null || input.getUserId().isEmpty()){
            return ResponseWrapper.getResponse( new RestError(HttpStatus.BAD_REQUEST, "USER_ID_NULL"));
        }
        user.setUserId(input.getUserId());
        user.setFirstName(input.getFirstName());
        user.setLastName(input.getLastName());
        user.setEmail(input.getEmail());
        user.setPhoneNumber(input.getPhoneNumber());
        user.setPassword(input.getPassword());
        user.setRoleIds(input.getRoleIds());
        user.update();
        user = userRepository.save(user);
        return ResponseWrapper.getResponse(new RestResponse(user));
    }

    @PreAuthorize("hasAuthority('READ_USER')")
    @RequestMapping(method = RequestMethod.GET)
    public ResponseEntity<IResponse> getAll() {
        List<User> users = userRepository.findAll();
        if (users.isEmpty()) {
            return ResponseWrapper.getResponse( new RestError(HttpStatus.NOT_FOUND, "USERS_NOT_FOUND"));
        }
        return ResponseWrapper.getResponse( new RestResponse( users));

    }

    @PreAuthorize("hasAuthority('READ_USER')")
    @RequestMapping(params = { "pageNumber", "size" } , method = RequestMethod.GET)
    public ResponseEntity<IResponse> getAll(@RequestParam( "pageNumber" ) int pageNumber, @RequestParam( "size" ) int size) {
        Pageable pageable = new PageRequest(pageNumber, size); //get 5 profiles on a page
        Page<User> page = userRepository.findAll(pageable);

        List<User> users = page.getContent();
        if (users.isEmpty()) {
            return ResponseWrapper.getResponse( new RestError(HttpStatus.NOT_FOUND, "USERS_NOT_FOUND"));
        }
        return ResponseWrapper.getResponse(  new PageResponse(users,page.getTotalElements(), pageNumber,size));

    }

    @PreAuthorize("hasAuthority('READ_USER')")
    @RequestMapping(params = { "pageNumber", "size" , "searchString" } , method = RequestMethod.GET)
    public ResponseEntity<IResponse> getAll(@RequestParam( "pageNumber" ) int pageNumber,
                                            @RequestParam( "size" ) int size,
                                            @RequestParam( "searchString" ) String searchString) {
        Pageable pageable = new PageRequest(pageNumber, size); //get 5 profiles on a page
        Page<User> page =  userRepository.findByUserIdLike(searchString,pageable);


        List<User> users = page.getContent();
        if (users.isEmpty()) {
            return ResponseWrapper.getResponse( new RestError(HttpStatus.NOT_FOUND, "USERS_NOT_FOUND"));
        }
        return ResponseWrapper.getResponse( new PageResponse(users,page.getTotalElements(), pageNumber,size));

    }

    @PreAuthorize("hasAuthority('READ_USER')")
    @RequestMapping(value = "/{id}", method = RequestMethod.GET)
    public ResponseEntity<IResponse> get(@PathVariable("id") String id) {
        User user = userRepository.findById(id);
        if (user == null) {
            return ResponseWrapper.getResponse( new RestError(HttpStatus.NOT_FOUND, "USER_NOT_FOUND", id));
        }
        return ResponseWrapper.getResponse( new RestResponse(user));
    }


}
