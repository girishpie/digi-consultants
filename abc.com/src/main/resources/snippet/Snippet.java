package snippet;

public class Snippet {
	<!DOCTYPE html>
	<html xmlns="http://www.w3.org/1999/xhtml" xmlns:th="http://www.thymeleaf.org"
	      xmlns:sec="http://www.thymeleaf.org/thymeleaf-extras-springsecurity3">
	    <head>
	        <title>Spring Security Example </title>
	    </head>
	    <body>
	        <div th:if="${param.error}">
	            Invalid username and password.
	        </div>
	        <div th:if="${param.logout}">
	            You have been logged out.
	        </div>
	        <form th:action="@{/login}" method="post">
	            <div><label> User Name : <input type="text" name="username"/> </label></div>
	            <div><label> Password: <input type="password" name="password"/> </label></div>
	            <div><input type="submit" value="Sign In"/></div>
	        </form>
	    </body>
	</html>
}

