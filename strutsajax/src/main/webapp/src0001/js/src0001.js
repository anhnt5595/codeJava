$( document ).ready(function() {
	$.ajax({
		type:"GET",
		url:"src00012",
		success: function(result){
			var tblData="<table class='tblUser'>";
			var thead = "<tr><th>ID</th>" +
					"<th>Product Name</th>" +
					"<th>Description</th>" +
					"<th>Price</th>" +
					"<th></th>" +
					"<th></th>" +
					"</tr>";
			tblData += thead;
			var data = result.users;				
			for (var i = 0; i < data.length; i++) {
				tblData += "<tr><td>" + data[i].id + "</td>" + 
				"<td>" + data[i].productName + "</td>" + 
				"<td>" + data[i].description + "</td>" + 
				"<td>" + data[i].price + "</td>" +
				"<td><input type='button' onclick='deleteProduct(" + data[i].id +")' value='Delete'></td>" +
				"<td> <button type='button' onclick='getProductById(" + data[i].id +")' class='btn btn-primary' data-toggle='modal' data-target='#myModal'>update</button></td>"+    
				"</tr>" ;
			}
			tblData += "</table>"
			$("#user-content").html(tblData);
		},
		error: function(result){
			alert("Some error occured.");
		}
	})
});
function deleteProduct(id){
	var src0001Bean = {};
	src0001Bean.id = id;
	$.ajax({
		type:"GET",
		url:"src00013",
		data: src0001Bean,
		contentType: "application/json; charset=utf-8",
	    dataType: "json",
		success: function(result){
			var tblData="<table class='tblUser'>";
			var thead = "<tr><th>ID</th>" +
					"<th>Product Name</th>" +
					"<th>Description</th>" +
					"<th>Price</th>" +
					"<th></th>" +
					"<th></th>" +
					"</tr>";
			tblData += thead;
			var data = result.users;				
			for (var i = 0; i < data.length; i++) {
				tblData += "<tr><td>" + data[i].id + "</td>" + 
				"<td>" + data[i].productName + "</td>" + 
				"<td>" + data[i].description + "</td>" + 
				"<td>" + data[i].price + "</td>" +
				"<td><input type='button' onclick='deleteProduct(" + data[i].id +")' value='Delete'></td>" +
				"<td> <button type='button' onclick='getProductById(" + data[i].id +")' class='btn btn-primary' data-toggle='modal' data-target='#myModal'>update</button></td>"+
				"</tr>" ;
			}
			tblData += "</table>"
			$("#user-content").html(tblData);
		},
		error: function(result){
			alert("Some error occured.");
		}
	})
}

function addProduct(){
	var src0001Bean = {};
	src0001Bean.id = $("#id").val();
	src0001Bean.productName = $("#productName").val();
	src0001Bean.description = $("#description").val();
	src0001Bean.price = $("#price").val();
	$.ajax({
		type:"GET",
		url:"src00014",
		data: src0001Bean,
		contentType: "application/json; charset=utf-8",
	    dataType: "json",
		success: function(result){
			var tblData="<table class='tblUser'>";
			var thead = "<tr><th>ID</th>" +
					"<th>Product Name</th>" +
					"<th>Description</th>" +
					"<th>Price</th>" +
					"<th></th>" +
					"<th></th>" +
					"</tr>";
			tblData += thead;
			var data = result.users;				
			for (var i = 0; i < data.length; i++) {
				tblData += "<tr><td>" + data[i].id + "</td>" + 
				"<td>" + data[i].productName + "</td>" + 
				"<td>" + data[i].description + "</td>" + 
				"<td>" + data[i].price + "</td>" +
				"<td><input type='button' onclick='deleteProduct(" + data[i].id +")' value='Delete'></td>" +
				"<td> <button type='button' onclick='getProductById(" + data[i].id +")' class='btn btn-primary' data-toggle='modal' data-target='#myModal'>update</button></td>"+
				"</tr>" ;
			}
			tblData += "</table>"
			$("#user-content").html(tblData);
		},
		error: function(result){
			alert("Some error occured.");
		}
	})
}

function searchProduct(){
	var src0001Bean = {};
	src0001Bean.productName = $("#SearchproductName").val();
	$.ajax({
		type:"GET",
		url:"src00015",
		data: src0001Bean,
		contentType: "application/json; charset=utf-8",
	    dataType: "json",
		success: function(result){
			var tblData="<table class='tblUser'>";
			var thead = "<tr><th>ID</th>" +
					"<th>Product Name</th>" +
					"<th>Description</th>" +
					"<th>Price</th>" +
					"<th></th>" +
					"<th></th>" +
					"</tr>";
			tblData += thead;
			var data = result.users;				
			for (var i = 0; i < data.length; i++) {
				tblData += "<tr><td>" + data[i].id + "</td>" + 
				"<td>" + data[i].productName + "</td>" + 
				"<td>" + data[i].description + "</td>" + 
				"<td>" + data[i].price + "</td>" +
				"<td><input type='button' onclick='deleteProduct(" + data[i].id +")' value='Delete'></td>" +
				"<td> <button type='button' onclick='getProductById(" + data[i].id +")' class='btn btn-primary' data-toggle='modal' data-target='#myModal'>update</button></td>"+
				"</tr>" ;
			}
			tblData += "</table>"
			$("#user-content").html(tblData);
		},
		error: function(result){
			alert("Some error occured.");
		}
	})
}

function getProductById(id){
	var src0001Bean = {};
	src0001Bean.id = id;
	$.ajax({
		type:"GET",
		url:"src00016",
		data: src0001Bean,
		contentType: "application/json; charset=utf-8",
	    dataType: "json",
		success: function(result){
//			console.log(result);
			$("#idpd").val(result.src0001Bean.id);
			$("#namepd").val(result.src0001Bean.productName);
			$("#description1").val(result.src0001Bean.description);
			$("#price1").val(result.src0001Bean.price);
		}
	});
}
function updatePd(){
	var src0001Bean = {};
	src0001Bean.id = $("#idpd").val();
	src0001Bean.productName = $("#namepd").val();
	src0001Bean.description = $("#description1").val();
	src0001Bean.price = $("#price1").val();
//	console.log(src0001Bean);
	$.ajax({
		type:"GET",
		url:"src00017",
		data: src0001Bean,
		contentType: "application/json; charset=utf-8",
		success: function(result){
			location.reload();
		},
		error: function(result){
			alert("aaa");
		}
	})
}