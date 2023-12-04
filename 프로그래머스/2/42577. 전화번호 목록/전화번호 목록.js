// pb   return
// ["119", "97674223", "1195524421"]	false
// ["123","456","789"]	true
// ["12","123","1235","567","88"]	false

phone_book = ["97674223", "1195524421", "119"];

function solution(phone_book) {
	let result = true;
	let pb = phone_book.sort((a, b) => {
		return a.length - b.length;
	});

	// 객체 선언
	let phoneBookMap = {};
	// {
	//    97674223 : true,
	//    119 : true,
	// }

	for (let i = 0; i < pb.length; i++) {
		for (let j = 1; j < pb[i].length; j++) {
			// 최초에 break;
			if (phoneBookMap.length === 0) {
				break;
			}
			// 각 번호의 글자수대로 뽑아서 해쉬 key 비교
			let prefix = pb[i].substring(0, j);
			// 자신이 피접두어인지 확인 → 맞으면 false 끝
			if (phoneBookMap[prefix]) {
				return false;
			}
		}
		// (자신이 피접두어가 아니면) 접두어로 등록
		phoneBookMap[pb[i]] = true;
	}
	return result;
}