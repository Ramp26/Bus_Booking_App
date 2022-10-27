package com.collabera.userbookingpro.dto;

import java.io.Serializable;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

import lombok.Data;

@Data
@Entity
public class UserData implements Serializable {
	
	@Id
@GeneratedValue(strategy = GenerationType.AUTO)
	private int uId;
	private String userName;
	private String userAddress;
	private long userContactNo;
	private String gender;
	

}
