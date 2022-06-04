package com.employee.controller;

import com.employee.exception.ResourceNotFoundException;
import com.employee.model.Department;
import com.employee.model.Employee;
import com.employee.repository.DepartmentRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
public class DepartmentController {

	@Autowired
	private DepartmentRepository departmentRepository;

	@GetMapping("/department")
	public List<Department> getAllDepartment(){
		return departmentRepository.findAll();
	}

	@PostMapping("/department")
	public Department createDepartment(@RequestBody Department department) {
		return departmentRepository.save(department);
	}

	@GetMapping("/department/{id}")
	public ResponseEntity<Department> getDepartmentById(@PathVariable Long id) {
        Department department = departmentRepository.findById(id).orElseThrow(() ->new ResourceNotFoundException("Department not exist with id :"+id));
		return ResponseEntity.ok(department);
	}

	@PutMapping("/department/{id}")
	public ResponseEntity<Department> updateDepartment(@PathVariable Long id,@RequestBody Department departmentDetails){
        Department department = departmentRepository.findById(id).orElseThrow(() ->new ResourceNotFoundException("Department not exist with id :"+id));

        department.setName(departmentDetails.getName());
        department.setContacts(departmentDetails.getContacts());
        department.setAddress(departmentDetails.getAddress());

        Department updateDepartment = departmentRepository.save(department);
		return ResponseEntity.ok(updateDepartment);
	}

	@DeleteMapping("/department/{id}")
	public ResponseEntity<Map<String, Boolean>> deleteDepartment(@PathVariable Long id){
        Department department = departmentRepository.findById(id).orElseThrow(() ->new ResourceNotFoundException("Department not exist with id :"+id));

        departmentRepository.delete(department);
		Map<String, Boolean> response = new HashMap<>();
		response.put("deleted", Boolean.TRUE);
		return ResponseEntity.ok(response);
	}
}
