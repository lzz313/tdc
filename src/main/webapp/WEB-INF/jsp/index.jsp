<%@ page contentType="text/html; charset=utf-8" %>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
	<meta http-equiv="Content-Type" content="text/html; charset=utf-8">
	<title>jsp page</title>
</head>
<body>
	<div id="formdata-keyvaleditor-container" class="row" style="margin-left: 0px; display: block;">
		<c:forEach items="${projects}" var="project" varStatus="status">
			<div id="${project.id}" class="keyvalueeditor-row">
				${status.count}:${project.name}
			</div>
		</c:forEach>
	</div>
</body>
</html>