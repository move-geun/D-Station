package com.ssafy.api.service;

import java.io.BufferedReader;
import java.io.FileReader;
import java.io.FileWriter;
import java.io.IOException;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.ssafy.db.repository.ProblemRepository;

@Service
public class GradingServiceImpl implements GradingService{
	@Autowired
	ProblemRepository problemRepository;
	
	@Override
	public String gradingJava(String code) throws IOException {
		FileWriter fw;
		fw = new FileWriter("Solution.java", false);
		fw.write(code);
		fw.close();
		Cmd cmd = new Cmd();
		
		String command = cmd.inputCommand("javac Solution.java");
		String res = cmd.execCommand(command);
		long uid = 4;
		
		fw = new FileWriter("input.txt", false);
		fw.write(problemRepository.findProblemByUid(uid).get().getInput());
		fw.close();
		
		fw = new FileWriter("output.txt", false);
		fw.write(problemRepository.findProblemByUid(uid).get().getOutput());
		fw.close();

		String inputLine = "";
		String outputLine = "";
		FileReader inputReader = new FileReader("input.txt");
		FileReader outputReader = new FileReader("output.txt");
		BufferedReader bufInputReader = new BufferedReader(inputReader);
		BufferedReader bufOutputReader = new BufferedReader(outputReader);
		
		while ((inputLine = bufInputReader.readLine())!=null) {
			command = cmd.inputCommand("java Solution\n"+inputLine);
			res = cmd.execCommand(command);
			outputLine = bufOutputReader.readLine();
			System.out.println(res+"<->"+outputLine);
		}
		
//		System.out.println(problemRepository.findProblemByUid(uid).get().getName());
//		System.out.println(problemRepository.findProblemByUid(uid).get().getContent());
//		System.out.println(problemRepository.findProblemByUid(uid).get().getInput());
//		System.out.println(problemRepository.findProblemByUid(uid).get().getOutput());
		command = cmd.inputCommand("java Solution");
		res = cmd.execCommand(command);
//		System.out.println(res);
		
		return null;
	}

}
