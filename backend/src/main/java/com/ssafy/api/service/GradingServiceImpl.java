package com.ssafy.api.service;

import org.python.util.PythonInterpreter;

import java.io.IOException;
import java.util.StringTokenizer;
import java.io.BufferedReader;
import java.io.FileReader;
import java.io.FileWriter;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.ssafy.api.response.grading.GradingRes;
import com.ssafy.db.entity.Problem;
import com.ssafy.db.repository.ProblemRepository;

@Service
public class GradingServiceImpl implements GradingService{
	@Autowired
	ProblemRepository problemRepository;

    public static PythonInterpreter interpreter;
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
		
		command = cmd.inputCommand("java Solution");
		res = cmd.execCommand(command);
		
		return null;
	}

	@Override
	public String gradingPython(int uid, String code) throws IOException {
		System.setProperty("python.import.site", "false");
		
		FileWriter fw;
		fw = new FileWriter("Solution.py", false);
		fw.write(code);
		fw.close();
		interpreter = new PythonInterpreter();
		interpreter.execfile("./Solution.py");
		
		Problem problem = problemRepository.findById((long)uid).get();
		String input = problem.getInput();
		String output = problem.getOutput();
		
		StringTokenizer st1 = new StringTokenizer(input);
		StringTokenizer st2 = new StringTokenizer(output);
		
		boolean success = true;
		
		while(st1.hasMoreTokens()) {
			String expect = st2.nextToken();
			String problemInput = st1.nextToken();
			interpreter.exec("x = solution("+problemInput+")");
			String answer = interpreter.get("x").toString();
			if(answer.charAt(answer.length()-1)=='L') {
				answer = answer.substring(0, answer.length()-1);
			}
			System.out.println(answer);
			System.out.println(expect);
			if(answer.compareTo(expect)!=0) {
				success = false;
				break;
			}
		}
		if(success) {
			return "success";
		}
		return "fail";
    }

	@Override
	public GradingRes getProblem(int uid) {
		Problem problem = problemRepository.getOne((long)uid);
		return GradingRes.of(problem);
	}

	@Override
	public GradingRes getProblemByMUid(long uid) {
		System.out.println(uid);
		Problem problem = problemRepository.findProblemBymUid((long)uid);
		return GradingRes.of(problem);
	}
}