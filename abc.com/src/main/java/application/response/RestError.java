package application.response;

import java.util.Locale;

import org.springframework.context.annotation.AnnotationConfigApplicationContext;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;

import application.configurarions.ErrorMessageConfig;

/**
 * Created by gipai on 9/27/2017.
 */
public class RestError extends Response {

    private String errorMessage;


    public RestError( HttpStatus status,String errorMessageId, Object...args){
        super(status);
        AnnotationConfigApplicationContext context =
                new AnnotationConfigApplicationContext(ErrorMessageConfig.class);

        this.errorMessage = context.getMessage(errorMessageId, args,Locale.US);
    }
    
    public RestError(String errorMessage, HttpStatus status){
        super(status);
        this.errorMessage = errorMessage;
    }

    public String getErrorMessage(){
        return this.errorMessage;
    }


}
