Date.prototype.format = function(format) {
		var o = {
			'M+': this.getMonth() + 1,
			'd+': this.getDate(),
			'h+': this.getHours(),
			'm+': this.getMinutes(),
			's+': this.getSeconds(),
			'q+': Math.floor((this.getMinutes() + 3) / 3),
			'S': this.getMilliseconds()
		}
		if ((/(y+)/).test(format)) {
			format = format.replace(RegExp.$1, (this.getFullYear() + '').substr(4 - RegExp.$1.length));
		}
		for (var k in o) {
			if (new RegExp('(' + k + ')').test(format)) {
				format = format.replace(RegExp.$1, RegExp.$1.length == 1 ? o[k] : ('00' + o[k]).substr(('' + o[k]).length));
			}
		}
		return format;
	}
	/*========================
	 *=========交易数据=======
	 *========================*/
var m1 = Math.floor(50000 * Math.random()),
	n1 = 20 + Math.floor(80 * Math.random()),
	d1 = 10+Math.floor(10*Math.random());
//////////////////////////////////////////////
// 随机数，区间鉴于num1~(num1+num2)
function rad(num1, num2) {
	return num1 + Math.floor(num2 * Math.random())
}
// 获取相关时间直接的毫秒数
function getSeconds(time1, time2) {
	var time1 = '2016/11/11 ' + time1;
	var time2 = '2016/11/11 ' + time2;
	return Math.floor((new Date(time2).getTime() - new Date(time1).getTime()) / 1000);
}
// 动态生成截止至当前时间交易额和笔数
function getMoneyAndNum() {
	var now = new Date(),
		minutes = getSeconds('00:00:00', now.format('hh:mm:ss'));
	// 处于00:00:00~06:00:00之间（交易额和笔数）
	if (getSeconds('00:00:00', '06:00:00') > minutes) {
		for (var i = 0; i <= minutes; i=i+5) {
			m1 = m1 + rad(300, 100);
			n1 = n1 + rad(5, 5);
		}
	}
	// 处于06:00:00~09:00:00之间（交易额和笔数）
	if (getSeconds('00:00:00', '06:00:00') <= minutes && getSeconds('00:00:00', '09:00:00') > minutes) {
		// 00:00:00~06:00:00（交易额和笔数）
		for (var i = 0; i <= getSeconds('00:00:00', '06:00:00'); i=i+5) {
			m1 = m1 + rad(300, 100);
			n1 = n1 + rad(5, 5);
		}
		// 06:00:00~现在（交易额和笔数）
		for (var i = 0; i <= getSeconds('06:00:00', 'hh:mm:ss'); i=i+5) {
			m1 = m1 + rad(1000, 500);
			n1 = n1 + rad(5, 15);
		}
	}
	// 处于09:00:00~11:00:00之间（交易额和笔数）
	if (getSeconds('00:00:00', '09:00:00') <= minutes && getSeconds('00:00:00', '11:00:00') > minutes) {
		// 00:00:00~06:00:00（交易额和笔数）
		for (var i = 0; i <= getSeconds('00:00:00', '06:00:00'); i=i+5) {
			m1 = m1 + rad(300, 100);
			n1 = n1 + rad(5, 5);
		}
		// 06:00:00~09:00:00（交易额和笔数）
		for (var i = 0; i <= getSeconds('06:00:00', '09:00:00'); i=i+5) {
			m1 = m1 + rad(1000, 500);
			n1 = n1 + rad(5, 15);
		}
		// 09:00:00~现在（交易额和笔数）
		for (var i = 0; i <= getSeconds('09:00:00', 'hh:mm:ss'); i=i+5) {
			m1 = m1 + rad(1500, 1000);
			n1 = n1 + rad(10, 20);
		}
	}
	// 处于11:00:00~14:00:00之间（交易额和笔数）
	if (getSeconds('00:00:00', '11:00:00') <= minutes && getSeconds('00:00:00', '14:00:00') > minutes) {
		for (var i = 0; i <= getSeconds('00:00:00', '06:00:00'); i=i+5) {
			m1 = m1 + rad(300, 100);
			n1 = n1 + rad(5, 5);
		}
		for (var i = 0; i <= getSeconds('06:00:00', '09:00:00'); i=i+5) {
			m1 = m1 + rad(1000, 500);
			n1 = n1 + rad(5, 15);
		}
		for (var i = 0; i <= getSeconds('09:00:00', '11:00:00'); i=i+5) {
			m1 = m1 + rad(1500, 1000);
			n1 = n1 + rad(10, 20);
		}
		for (var i = 0; i <= getSeconds('11:00:00', 'hh:mm:ss'); i=i+5) {
			m1 = m1 + rad(3000, 1000);
			n1 = n1 + rad(20, 20);
		}
	}
	// 处于14:00:00~17:00:00之间（交易额和笔数）
	if (getSeconds('00:00:00', '14:00:00') <= minutes && getSeconds('00:00:00', '17:00:00') > minutes) {
		for (var i = 0; i <= getSeconds('00:00:00', '06:00:00'); i=i+5) {
			m1 = m1 + rad(300, 100);
			n1 = n1 + rad(5, 5);
		}
		for (var i = 0; i <= getSeconds('06:00:00', '09:00:00'); i=i+5) {
			m1 = m1 + rad(1000, 500);
			n1 = n1 + rad(5, 15);
		}
		for (var i = 0; i <= getSeconds('09:00:00', '11:00:00'); i=i+5) {
			m1 = m1 + rad(1500, 1000);
			n1 = n1 + rad(10, 20);
		}
		for (var i = 0; i <= getSeconds('11:00:00', '14:00:00'); i=i+5) {
			m1 = m1 + rad(3000, 1000);
			n1 = n1 + rad(10, 20);
		}
		for (var i = 0; i <= getSeconds('14:00:00', 'hh:mm:ss'); i=i+5) {
			m1 = m1 + rad(2000, 1000);
			n1 = n1 + rad(15, 20);
		}
	}
	// 处于17:00:00~20:00:00之间（交易额和笔数）
	if (getSeconds('00:00:00', '17:00:00') <= minutes && getSeconds('00:00:00', '20:00:00') > minutes) {
		for (var i = 0; i <= getSeconds('00:00:00', '06:00:00'); i=i+5) {
			m1 = m1 + rad(300, 100);
			n1 = n1 + rad(5, 5);
		}
		for (var i = 0; i <= getSeconds('06:00:00', '09:00:00'); i=i+5) {
			m1 = m1 + rad(1000, 500);
			n1 = n1 + rad(5, 15);
		}
		for (var i = 0; i <= getSeconds('09:00:00', '11:00:00'); i=i+5) {
			m1 = m1 + rad(1500, 1000);
			n1 = n1 + rad(10, 20);
		}
		for (var i = 0; i <= getSeconds('11:00:00', '14:00:00'); i=i+5) {
			m1 = m1 + rad(3000, 1000);
			n1 = n1 + rad(10, 20);
		}
		for (var i = 0; i <= getSeconds('14:00:00', '17:00:00'); i=i+5) {
			m1 = m1 + rad(2000, 1000);
			n1 = n1 + rad(15, 20);
		}
		for (var i = 0; i <= getSeconds('17:00:00', 'hh:mm:ss'); i=i+5) {
			m1 = m1 + rad(3000, 1000);
			n1 = n1 + rad(20, 30);
		}
	}
	// 处于20:00:00~11:24:00之间（交易额和笔数）
	if (getSeconds('00:00:00', '20:00:00') <= minutes && getSeconds('00:00:00', '23:59:59') >= minutes) {
		for (var i = 0; i <= getSeconds('00:00:00', '06:00:00'); i=i+5) {
			m1 = m1 + rad(300, 100);
			n1 = n1 + rad(5, 5);
		}
		for (var i = 0; i <= getSeconds('06:00:00', '09:00:00'); i=i+5) {
			m1 = m1 + rad(1000, 500);
			n1 = n1 + rad(5, 15);
		}
		for (var i = 0; i <= getSeconds('09:00:00', '11:00:00'); i=i+5) {
			m1 = m1 + rad(1500, 1000);
			n1 = n1 + rad(10, 20);
		}
		for (var i = 0; i <= getSeconds('11:00:00', '14:00:00'); i=i+5) {
			m1 = m1 + rad(3000, 1000);
			n1 = n1 + rad(10, 20);
		}
		for (var i = 0; i <= getSeconds('14:00:00', '17:00:00'); i=i+5) {
			m1 = m1 + rad(2000, 1000);
			n1 = n1 + rad(15, 20);
		}
		for (var i = 0; i <= getSeconds('17:00:00', '20:00:00'); i=i+5) {
			m1 = m1 + rad(3000, 1000);
			n1 = n1 + rad(20, 30);
		}
		for (var i = 0; i <= getSeconds('20:00:00', 'hh:mm:ss'); i=i+5) {
			m1 = m1 + rad(1000, 1000);
			n1 = n1 + rad(5, 15);
		}
	}
	setTimeout(function() {
		$('#todayMoney').html(m1);
		$('#todayNum').html(n1);
	}, 300);
}
getMoneyAndNum();
// 动态生成攻击笔数
function getNums() {
	var now = new Date(),
		day=now.getDate();
	for(var i=1;i<=day;i++){
		d1+=rad(500,150);
	}
	setTimeout(function() {
		$('#marketData2').html(d1);
	}, 300);

	if(day==1&&new Date(now).getTime()<new Date(now.format('yyyy/MM/dd 01:00:00')).getTime()){
		d1 = 10+Math.floor(10*Math.random());
	}
}
getNums();
//////////////////////////////////////////////
// 如果当前时间处于firstDate<curDate<lastDate，处于白天高峰期，数据加载速度添加
// 如果当前时间处于firstDate>curDate,curDate>lastDate，处于晚上低峰期期，数据加载速度降低
// 如果当前时间为第二天00:00:00，数据更新，firstDate,lastDate,nextDate更新
var now = new Date();
var nextDate = new Date(now.getTime() + 24 * 60 * 60 * 1000).format('yyyy/MM/dd 00:00:00');
var timer1 = setInterval(function() {
	var now = new Date();
	if (now.getTime() >= new Date(now.format('yyyy/MM/dd 00:00:00')).getTime() && now.getTime() < new Date(now.format('yyyy/MM/dd 06:00:00')).getTime()) {
		m1 = m1 + rad(300, 100);
		n1 = n1 + rad(5, 5);
	} else if (now.getTime() >= new Date(now.format('yyyy/MM/dd 06:00:00')).getTime() && now.getTime() < new Date(now.format('yyyy/MM/dd 09:00:00')).getTime()) {
		m1 = m1 + rad(1000, 500);
		n1 = n1 + rad(5, 15);
	} else if (now.getTime() >= new Date(now.format('yyyy/MM/dd 09:00:00')).getTime() && now.getTime() < new Date(now.format('yyyy/MM/dd 11:00:00')).getTime()) {
		m1 = m1 + rad(1500, 1000);
		n1 = n1 + rad(10, 20);
	} else if (now.getTime() >= new Date(now.format('yyyy/MM/dd 11:00:00')).getTime() && now.getTime() < new Date(now.format('yyyy/MM/dd 14:00:00')).getTime()) {
		m1 = m1 + rad(3000, 1000);
		n1 = n1 + rad(20, 20);
	} else if (now.getTime() >= new Date(now.format('yyyy/MM/dd 14:00:00')).getTime() && now.getTime() < new Date(now.format('yyyy/MM/dd 17:00:00')).getTime()) {
		m1 = m1 + rad(2000, 1000);
		n1 = n1 + rad(15, 20);
	} else if (now.getTime() >= new Date(now.format('yyyy/MM/dd 17:00:00')).getTime() && now.getTime() < new Date(now.format('yyyy/MM/dd 20:00:00')).getTime()) {
		m1 = m1 + rad(3000, 1000);
		n1 = n1 + rad(20, 30);
	} else if (now.getTime() >= new Date(now.format('yyyy/MM/dd 20:00:00')).getTime() && now.getTime() < new Date(now.format('yyyy/MM/dd 23:59:59')).getTime()) {
		m1 = m1 + rad(1000, 1000);
		n1 = n1 + rad(5, 15);
	}
	$('#todayNum').html(n1);
	$('#todayMoney').html(m1);
	// 第二天，数据换掉
	if (now.getTime() >= new Date(nextDate).getTime()) {
		// 初始化，今天的数据转昨天；今天数据重新开始
		// $('#yestodayMoney').html(m1);
		// $('#yestodayNum').html(n1);

		m1 = Math.floor(50000 * Math.random());
		n1 = 20 + Math.floor(80 * Math.random());
		nextDate = new Date(now.getTime() + 24 * 60 * 60 * 1000).format('yyyy/MM/dd 00:00:00');

		$('#todayMoney').html(m1);
		$('#todayNum').html(n1);

		console.log(m1+','+n1+','+nextDate)
	}
}, 5000);

setInterval(function(){
	// 抵御攻击次数
	d1 += 10 + Math.floor(10 * Math.random());
	$('#marketData2').html(d1);

	var now = new Date(),
		day=now.getDate();
	if(day==1&&now.format('yyyy/MM/dd hh:mm:ss').getTime()<now.format('yyyy/MM/dd 01:00:00').getTime()){
		d1 = 10+Math.floor(10*Math.random());
	}

},3600000)
/*========================
 *======所占百分比========
 *========================*/
// 百分比，不加%
var percent = ["38.8", "10.0", "19.8", "31.4"],
	degArray = [];
for (var i = 0; i < 4; i++) {
	var deg = Math.floor(252 * parseFloat(percent[i]) / 100);
	$('.percent_data').eq(i).html(percent[i] + "%");
	degArray.push(deg);
}
setTimeout(function() {
		var pointerArray = $('.pay_percent .pointer');
		for (var i = 0; i < 4; i++) {
			pointerArray[i].style.transform = 'rotate(' + (degArray[i] - 126) + 'deg)';
			pointerArray[i].style.webkitTransform = 'rotate(' + (degArray[i] - 126) + 'deg)';
		}
	}, 300)
	/*========================
	 *====交易笔数市场份额====
	 *========================*/
	// 图表数据
var charts = [{}];
charts[0].data = [{
	name: '支付宝',
	value: 200
}, {
	name: '微信支付',
	value: 180
}, {
	name: 'QQ钱包',
	value: 30
}, {
	name: '百度钱包',
	value: 40
}, {
	name: '京东钱包',
	value: 20
}, {
	name: '翼支付',
	value: 45
}, {
	name: '其它',
	value: 33
}];
wp_echarts.pie('marketCharts', charts[0]);
// 上一年
var nowYear = new Date().getFullYear();
$('#year').html(nowYear - 1);