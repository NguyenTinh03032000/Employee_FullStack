package com.employee.model;

import com.fasterxml.jackson.annotation.JsonIgnore;
import lombok.*;

import javax.persistence.*;
import java.util.List;

@Data
@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@Entity
@Table(name = "department")
public class Department {
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private long id;
	
	@Column(name = "name")
	private String name;
	
	@Column(name = "contacts")
	private String contacts;
	
	@Column(name = "address")
	private String address;

	@JsonIgnore
	@OneToMany(mappedBy = "department")
	private List<Employee> listEmployee;
}
