package com.app.scr0001.action;

import java.util.ArrayList;

import com.app.scr0001.bean.SRC0001Bean;
import com.app.scr0001.dao.SRC0001Dao;
import com.app.scr0001.form.SRC0001Form;

public class SRC0001Action extends SRC0001Form{
	/**
	 * 
	 */
	private static final long serialVersionUID = -3040627687979003103L;
	private java.util.List<SRC0001Bean> users;

	public String initScreen(){
		return SUCCESS;
	}
	private SRC0001Dao dao = new SRC0001Dao();
	
	public String listUser(){
		users = new ArrayList<SRC0001Bean>();
		users = dao.getAllProduct();
		return SUCCESS;
	}
	
	/////////////////////////////////////////////////////////////////
	
	public String deleteUser(){		
		users = new ArrayList<SRC0001Bean>();
		users = dao.deleteProduct(id);
		return SUCCESS;
	}
	public String addUser() {
		SRC0001Bean s = new SRC0001Bean();
		s.setId(id);
		s.setProductName(productName);
		s.setDescription(description);
		s.setPrice(price);
		users = new ArrayList<SRC0001Bean>();
		users = dao.addProduct(s);
		return SUCCESS;
	}

	public String searchUser() {
		users = new ArrayList<SRC0001Bean>();
		users = dao.searchProduct(productName);
		return SUCCESS;
	}
	/////////////////////////////////////////////////////////////////////////////
	
	
	public String getProductById() {
		src0001Bean=(SRC0001Bean) dao.getProductById(id);
		return SUCCESS;
	}
	public String updateProduct() {
		SRC0001Bean src0001Bean=new SRC0001Bean();
		src0001Bean.setId(id);
		src0001Bean.setPrice(price);
		src0001Bean.setProductName(productName);
		src0001Bean.setDescription(description);
		dao.updateProduct(src0001Bean);
		return SUCCESS;
	}
	
	
	public java.util.List<SRC0001Bean> getUsers() {
		return users;
	}

	public void setUsers(java.util.List<SRC0001Bean> users) {
		this.users = users;
	}

	public SRC0001Bean getSrc0001Bean() {
		return src0001Bean;
	}

	public void setSrc0001Bean(SRC0001Bean src0001Bean) {
		this.src0001Bean = src0001Bean;
	}

}
