package com.ssafy.api.service;

import java.io.BufferedReader;
import java.io.InputStream;
import java.io.InputStreamReader;

public class Cmd {
	
	private StringBuffer buffer;
	private Process process;
	private BufferedReader bufferedReader;
	private StringBuffer readBuffer;
	
	public String inputCommand(String cmd) {
		
		buffer = new StringBuffer();
		
		buffer.append("cmd.exe ");	
		buffer.append("/c ");
		buffer.append(cmd);

		return buffer.toString();
	}
	
	public String execCommand(String cmd) {
		try {
			System.out.println(cmd);
			process = Runtime.getRuntime().exec(cmd);
			bufferedReader = new BufferedReader(new InputStreamReader(process.getInputStream()));
			
			String line = null;
			readBuffer = new StringBuffer();
			while((line = bufferedReader.readLine()) != null) {
				System.out.println(line);
				System.out.println(111);
				readBuffer.append(line);
				readBuffer.append("\n");
			}
			System.out.println(readBuffer.toString());
			return readBuffer.toString();
		}catch (Exception e) {
			e.printStackTrace();
			System.exit(1);
		}
		
		return null;
	}
}