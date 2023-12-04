// pb   return
// ["119", "97674223", "1195524421"]	false
// ["123","456","789"]	true
// ["12","123","1235","567","88"]	false
phone_book = ["97674223", "1195524421", "119"];
function solution(phone_book) {
	let result = true;
	// 오름차순 길이 정렬
	let pb = phone_book.sort((a, b) => {
		return a.length - b.length;
	});

	// 객체 선언
	let pbHash = {};
	// {
	//    97674223 : true,
	//    1195524421 : true,
	//    119 : true,
	// }

	for (let i = 0; i < pb.length; i++) {
		for (let j = 1; j < pb[i].length; j++) {
			// 최초에 접두어 없을때 break;
			if (pbHash.length === 0) {
				break;
			}
			// 각 번호의 글자수대로 뽑아서 접두어(해쉬 key) 체크
			// 자신이 피접두어라면, false 끝
			let prefix = pb[i].substring(0, j);
			if (pbHash[prefix]) {
				return false;
			}
		}
		// (자신이 피접두어가 아니면) 접두어로 등록
		pbHash[pb[i]] = true;
	}
	return result;
}
