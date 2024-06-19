package org.springframework.samples.petclinic.adoptions;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.dao.DataAccessException;
import org.springframework.samples.petclinic.consultation.Consultation;
import org.springframework.samples.petclinic.exceptions.ResourceNotFoundException;
import org.springframework.samples.petclinic.owner.Owner;
import org.springframework.samples.petclinic.owner.OwnerRepository;
import org.springframework.samples.petclinic.owner.OwnerService;
import org.springframework.samples.petclinic.pet.PetService;
import org.springframework.stereotype.Service;

import org.springframework.transaction.annotation.Transactional;

@Service
public class AdoptionsService {

	private AdoptionsRepository adoptionsRepository;
	private OwnerService ownerService;

	@Autowired
	public AdoptionsService(AdoptionsRepository adoptionsRepository, OwnerService ownerService) {
		this.adoptionsRepository = adoptionsRepository;
		this.ownerService = ownerService;
	}

	@Transactional(readOnly = true)
	public Iterable<Adoptions> findAll() throws DataAccessException {
		return adoptionsRepository.findAll();
	}

	@Transactional(readOnly = true)
	public List<Adoptions> findConsultatiosByOwnerId(Integer ownerId) {
		if (ownerId == null) {
			throw new ResourceNotFoundException("owner", "id", ownerId);
		} else {
			Owner owner = ownerService.findOwnerById(ownerId);
			return adoptionsRepository.findConsultationsByOwner(owner);
		}
	}

	@Transactional(readOnly = true)
	public Adoptions findById(Integer adoptionId) throws DataAccessException {
		if (adoptionId == null) {
			throw new ResourceNotFoundException("adoptions", "id", adoptionId);
		} else {
			return adoptionsRepository.findById(adoptionId).orElseThrow();
		}
	}

	@Transactional()
	public Adoptions save(Adoptions adoptions) throws DataAccessException {
		adoptionsRepository.save(adoptions);
		return adoptions;
	}

	@Transactional()
	public Adoptions create(Adoptions adoptions) throws DataAccessException {
		Adoptions newAdoptions = new Adoptions();
		newAdoptions.setId(adoptions.getId());
		newAdoptions.setDescription(adoptions.getDescription());
		newAdoptions.setPet(adoptions.getPet());
		newAdoptions.setApplication(adoptions.getApplication());
		newAdoptions.setIsAccepted(adoptions.getIsAccepted());
		newAdoptions.setOwner(adoptions.getOwner());
		newAdoptions.setAdopter(adoptions.getAdopter());
		save(newAdoptions);
		return newAdoptions;
	}

	@Transactional()
	public Adoptions update(Adoptions adoptions) throws DataAccessException {
		Adoptions existingAdoptions = adoptionsRepository.findById(adoptions.getId()).orElseThrow();
		existingAdoptions.setId(adoptions.getId());
		existingAdoptions.setDescription(adoptions.getDescription());
		existingAdoptions.setPet(adoptions.getPet());
		existingAdoptions.setApplication(adoptions.getApplication());
		existingAdoptions.setIsAccepted(adoptions.getIsAccepted());
		existingAdoptions.setAdopter(adoptions.getAdopter());
		existingAdoptions.setOwner(adoptions.getOwner());
		save(existingAdoptions);
		return existingAdoptions;
	}

	@Transactional()
	public void delete(Integer adoptionId) throws DataAccessException {
		if (adoptionId == null) {
			throw new ResourceNotFoundException("adoptions", "id", adoptionId);
		} else {
			Adoptions adoptions = adoptionsRepository.findById(adoptionId).orElseThrow();
			adoptionsRepository.delete(adoptions);
		}

	}

}
