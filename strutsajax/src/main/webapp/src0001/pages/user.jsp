<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<%@ taglib prefix="s" uri="/struts-tags"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">

<html>
<head>
<!-- Latest compiled and minified CSS -->
<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css">

<!-- jQuery library -->
<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>

<!-- Popper JS -->
<script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.7/umd/popper.min.js"></script>

<!-- Latest compiled JavaScript -->
<script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.3.1/js/bootstrap.min.js"></script>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<script src="../common/js/jquery.min.js"></script>
<script src="../src0001/js/src0001.js"></script>
<link rel="stylesheet" href="../src0001/css/src0001.css" />
<title>Product Manager</title>
</head>
<body>

	<div id="div1" style="width: 100%;" class="form">
		<s:textfield name="productName" class="productName" id="productName" label="Product name" /><br/>
		<s:textfield name="description" class="description" id="description" label="Description" /><br/>
		<s:textfield name="price" class="price" id="price" label="Price" /><br/>
		<s:submit id="add" type="submit" value="Add" onclick="addProduct()" /><br/>
		<br/>
	</div>

	<hr>
	<div id="div2">
		<s:textfield name="SearchproductName" id="SearchproductName"
			label="Search Name" />
		<br>
		<s:submit id="search" type="submit" value="Search" onclick="searchProduct()" />
	</div>

	<div id="user-content"></div>
	


  <!-- The Modal -->
  <div class="modal" id="myModal">
    <div class="modal-dialog">
      <div class="modal-content">
      
        <!-- Modal Header -->
        <div class="modal-header">
          <h4 class="modal-title">Update Product</h4>
          <button type="button" class="close" data-dismiss="modal">&times;</button>
        </div>
        
        <!-- Modal body -->
        <div class="modal-body">
		 	<form >
				<div class="form-group">
					 <input type="hidden" class="form-control" id="idpd">
				</div>
				<div class="form-group">
				<label for="namepd">Name:</label> <input type="text" class="form-control" id="namepd">
				</div>
				
				<div class="form-group">
					<label for="description1">Description:</label> <input type="text"class="form-control" id="description1">
				</div>
				
				<div class="form-group">
				<label for="price1">Price:</label> <input type="text"class="form-control" id="price1">
				</div>		
			</form>
		</div>
        
        <!-- Modal footer -->
        <div class="modal-footer">
         <button type="button" class="btn btn-danger" data-dismiss="modal" onclick="updatePd()">Update</button>
          <button type="button" class="btn btn-warning" data-dismiss="modal">Cancel</button>
        </div>
        
      </div>
    </div>
  </div>
</body>
</html>