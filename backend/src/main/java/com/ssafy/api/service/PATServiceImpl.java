package com.ssafy.api.service;

import org.openqa.selenium.By;
import org.openqa.selenium.Keys;
import org.openqa.selenium.PageLoadStrategy;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.chrome.ChromeOptions;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.ssafy.db.entity.User;
import com.ssafy.db.repository.UserRepository;

@Service
public class PATServiceImpl implements PATService {
	@Autowired
	UserRepository userRepository;

	@Override
	public boolean createPAT(String userId, String githubId, String githubPw) {
		User user = userRepository.getUsersById(userId).get();
		if(user.getPat()!=null) {
			System.out.println("이미 Personal Access Token이 등록된 유저입니다.");
			return false;
		}
		
		System.out.println("세션 시작");
		System.setProperty("webdriver.chrome.driver", "chromedriver");
		ChromeOptions options = new ChromeOptions();
		System.out.println("chrome option");
		// 페이지가 로드될 때까지 대기
		// Normal: 로드 이벤트 실행이 반환 될 때 까지 기다린다.
		options.setPageLoadStrategy(PageLoadStrategy.NORMAL);
		options.addArguments("--headless");
		options.addArguments("--no-sandbox");
		options.addArguments("--single-process");
		options.addArguments("--disable-dev-shm-usage");

		WebDriver driver = new ChromeDriver(options);
		// login 페이지
		driver.get("https://github.com/login");
		driver.findElement(By.xpath("//*[@id=\"login_field\"]")).sendKeys(githubId);
		driver.findElement(By.xpath("//*[@id=\"password\"]")).sendKeys(githubPw);
		driver.findElement(By.xpath("//*[@id=\"login\"]/div[4]/form/div/input[11]")).sendKeys(Keys.ENTER);
		System.out.println(driver.getPageSource());
		driver.navigate().to("https://github.com/settings/tokens/new");
		System.out.println("토큰 생성 페이지 이동");
		
		driver.findElement(By.xpath("//*[@id=\"oauth_access_description\"]")).sendKeys("D-station");
		driver.findElement(By.xpath("//*[@id=\"new_oauth_access\"]/div/dl[2]/dd/div/ul/li[1]/label/div/input")).click();
		driver.findElement(By.xpath("//*[@id=\"new_oauth_access\"]/div/dl[2]/dd/div/ul/li[4]/label/div/input")).click();
		driver.findElement(By.xpath("//*[@id=\"new_oauth_access\"]/div/dl[2]/dd/div/ul/li[5]/label/div/input")).click();
		driver.findElement(By.xpath("//*[@id=\"new_oauth_access\"]/div/dl[2]/dd/div/ul/li[6]/label/div/input")).click();
		driver.findElement(By.xpath("//*[@id=\"new_oauth_access\"]/div/dl[2]/dd/div/ul/li[11]/label/div/input"))
				.click();
		driver.findElement(By.xpath("//*[@id=\"new_oauth_access\"]/div/dl[2]/dd/div/ul/li[12]/label/div/input"))
				.click();
		driver.findElement(By.xpath("//*[@id=\"new_oauth_access\"]/div/dl[2]/dd/div/ul/li[16]/label/div/input"))
				.click();
		driver.findElement(By.xpath("//*[@id=\"new_oauth_access\"]/div/dl[2]/dd/div/ul/li[17]/label/div/input"))
				.click();
		driver.findElement(By.xpath("//*[@id=\"new_oauth_access\"]/p/button")).click();
		String pat = driver.findElement(By.xpath("//*[@id=\"new-oauth-token\"]")).getText();
		user.setPat(pat);
		userRepository.save(user);
		driver.quit();
		return true;
	}

}
