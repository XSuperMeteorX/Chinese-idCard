var IDCard = "511902200910140010";		// 请输入您的身份证号码(全部)

var coefficient = [7, 9, 10, 5, 8, 4, 2, 1, 6, 3, 7, 9, 10, 5, 8, 4, 2];
var validate = [1, 0, 'X', 9, 8, 7, 6, 5, 4, 3, 2];

if (IDCard.length === 18) {
	let result = 0;
	for (let i = 0; i < IDCard.length - 1; i++) {
		result += parseInt(IDCard[i]) * parseInt(coefficient[i]);
	}
	console.log("您的校验码为: " + validate[result % 11] + "\n您的身份证完整补全: " + IDCard.slice(0, 17) + validate[result % 11]);
} else {
	console.log("程序发生了一个意料之外的错误! 错误原因：未知的身份证号码。\n您的身份证号码位数为: " + IDCard.length + ", 您应输入 17 位。");
}