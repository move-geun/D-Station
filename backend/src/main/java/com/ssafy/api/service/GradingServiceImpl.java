package com.ssafy.api.service;

import org.apache.commons.exec.CommandLine;
import org.apache.commons.exec.DefaultExecutor;
import org.apache.commons.exec.PumpStreamHandler;
import org.python.util.PythonInterpreter;

import java.io.ByteArrayOutputStream;
import java.io.IOException;
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
	public String gradingPython(String code) throws IOException {
        String[] command = new String[4];
        command[0] = "python";
        command[1] = "/ssafy-web-project/test.py";
        command[2] = "10";
        command[3] = "20";
        interpreter = new PythonInterpreter();
        interpreter.execfile("./test.py");
		return "asdfa";
    }
}