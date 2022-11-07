package com.ssafy.api.service;

import java.util.ArrayList;
import java.util.Random;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.ssafy.db.entity.CSKnow;
import com.ssafy.db.repository.CSKnowRepository;

@Service
public class CSServiceImpl implements CSService {

	@Autowired
	CSKnowRepository csKnowRepository;

	@Override
	public CSKnow getCSKnow() {
		Random random = new Random();
		ArrayList<CSKnow> list = csKnowRepository.findAll();
		CSKnow cs = list.get(random.nextInt(list.size()));
		return cs;
	}

}
