package com.collabera.userbookingpro.pojo;

import java.sql.Date;

import lombok.Data;

@Data
public class BusPojo {

	
	private int busId;
	private String busName;
	private String busFeature;
	private String busFacility;
	private String fromPlace;
	private String  toPlace;
	private Double charges;
	private int distance;
	private Date travellingDate;
	private String driverName;
	private long contactNo;
}
