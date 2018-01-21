package com.rest;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import javax.servlet.http.HttpServletRequest;

import net.sf.json.JSONObject;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.servlet.ModelAndView;

/**
 * 接口
 */
@Controller
@RequestMapping()
public class ApiController {
	
	@RequestMapping(value = "/index")
	public ModelAndView index(HttpServletRequest request) {
		return new ModelAndView("index");
	}
	
	/**
	 * 跨域
	 */
	@RequestMapping(value = "/getDataCross")
	@ResponseBody
	public String getDataCross(HttpServletRequest request) {
		String resultStr = this.prepareData();
		//跨域返回的数据形式，对于jsonp的请求
		return request.getParameter("callback") + "(" + resultStr + ")";
	}
	
	/**
	 * 不跨域
	 */
	@RequestMapping(value = "/getData")
	@ResponseBody
	public String getData(HttpServletRequest request) {
		String resultStr = this.prepareData();
		return resultStr;//不跨域的请求返回数据
	}

	//准备数据，参考 frontDemo 中的 grammar.js 的data
	private String prepareData(){
		Map<String,Object> resultMap = new HashMap<String,Object>();
		//字符串
		resultMap.put("content", "<font color=\"red\">hello world</font>");
		
		//对象
		Person person = new Person();
		person.setAge(100);
		person.setName("王阳明");
		resultMap.put("person", person);
		
		//列表
		List<Person> personList = new ArrayList<Person>();
		Person person0 = new Person();
		person0.setAge(90);
		person0.setName("王守仁");
		personList.add(person0);
		
		Person person1 = new Person();
		person1.setAge(80);
		person1.setName("朱熹");
		personList.add(person1);
		
		Person person2 = new Person();
		person.setAge(70);
		person.setName("程颢");
		personList.add(person2);
		resultMap.put("personList", personList);
		
		//转换为json
		return JSONObject.fromObject(resultMap).toString();
	}
	
}

