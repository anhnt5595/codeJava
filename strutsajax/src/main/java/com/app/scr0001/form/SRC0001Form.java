package com.app.scr0001.form;

import com.app.common.BaseAction;
import com.app.scr0001.bean.SRC0001Bean;

public class SRC0001Form extends BaseAction{

	/**
	 * 
	 */
	private static final long serialVersionUID = -7053929716661704945L;
	protected SRC0001Bean src0001Bean;
	protected String id;
	protected String productName;
	protected String description;
	protected String price;
	
	
	public String getProductName() {
		return productName;
	}
	public void setProductName(String productName) {
		this.productName = productName;
	}
	public String getDescription() {
		return description;
	}
	public void setDescription(String description) {
		this.description = description;
	}
	public String getPrice() {
		return price;
	}
	public void setPrice(String price) {
		this.price = price;
	}
	public static long getSerialversionuid() {
		return serialVersionUID;
	}
	public SRC0001Bean getSrc0001Bean() {
		return src0001Bean;
	}
	public void setSrc0001Bean(SRC0001Bean src0001Bean) {
		this.src0001Bean = src0001Bean;
	}
	public String getId() {
		return id;
	}
	public void setId(String id) {
		this.id = id;
	}
	
	

}
