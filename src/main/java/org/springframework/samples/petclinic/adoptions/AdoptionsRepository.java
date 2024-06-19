package org.springframework.samples.petclinic.adoptions;

import java.util.List;

import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.query.Param;
import org.springframework.samples.petclinic.owner.Owner;
import org.springframework.stereotype.Repository;

@Repository
public interface AdoptionsRepository extends CrudRepository<Adoptions,Integer>{
    
    @Query("SELECT DISTINCT a FROM Adoptions a WHERE a.owner = :owner")
    List<Adoptions> findConsultationsByOwner(@Param("owner") Owner owner);
}
