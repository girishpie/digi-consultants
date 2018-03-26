package application.drawing;

import org.springframework.data.mongodb.repository.MongoRepository;

import java.util.List;

/**
 * Created by gipai on 9/30/2017.
 */

public interface DrawingCatalogRepository extends MongoRepository<DrawingCatalog, String> {

    DrawingCatalog findByDisplayName(String originalFilename);
    DrawingCatalog findById(String id);
    DrawingCatalog findByProjectId(String id);
}
