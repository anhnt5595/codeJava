package com.app.scr0001.dao;

import java.sql.SQLException;
import java.util.List;

import com.app.common.CommonDao;
import com.app.scr0001.bean.SRC0001Bean;

public class SRC0001Dao extends CommonDao {

	@SuppressWarnings("unchecked")
	public List<SRC0001Bean> getAllProduct() {
		List<SRC0001Bean> src0001Beans = null;
		try {
			src0001Beans = (List<SRC0001Bean>) sqlMapClient.queryForList("SRC0001.getAllProduct", null);
		} catch (Exception e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
		return src0001Beans;
	}
	//////////////////////////////////////////////////////////////////
	public List<SRC0001Bean> deleteProduct(String id) {
		List<SRC0001Bean> src0001Beans = null;
		try {
			sqlMapClient.delete("SRC0001.deleteProduct", id);
			src0001Beans = getAllProduct();
		} catch (Exception e) {
			// TODO: handle exception
			e.printStackTrace();
		}
		return src0001Beans;
	}
	public List<SRC0001Bean> addProduct(SRC0001Bean s) {
		List<SRC0001Bean> src0001Beans = null;
		try {
			sqlMapClient.insert("SRC0001.insertProduct", s);
			src0001Beans = getAllProduct();
		} catch (Exception e) {
			// TODO: handle exception
			e.printStackTrace();
		}
		return src0001Beans;
	}

	@SuppressWarnings("unchecked")
	public List<SRC0001Bean> searchProduct(String s) {
		List<SRC0001Bean> src0001Beans = null;
		try {			
			src0001Beans = (List<SRC0001Bean>) sqlMapClient.queryForList("SRC0001.searchProduct", s);
		} catch (Exception e) {
			// TODO: handle exception
			e.printStackTrace();
		}
		return src0001Beans;
	}

	//////////////////////////////////////////////////////////////////////////////////////////////////

	public SRC0001Bean getProductById(String id) {
		SRC0001Bean src0001Beans = null;
		try {
			src0001Beans = (SRC0001Bean) sqlMapClient.queryForObject("SRC0001.getProductById", id);
		} catch (Exception e) {
			// TODO: handle exception
			e.printStackTrace();
		}
		return src0001Beans;
	}

	
	public void updateProduct(SRC0001Bean bean) {
		try {
			sqlMapClient.update("SRC0001.updateProduct", bean);
		} catch (Exception e) {
			// TODO: handle exception
			e.printStackTrace();
		}
	}
}
