function solution(bridge_length, weight, truck_weights) {
    let answer = 1;
    let onBridge = [];
    let totalWeight = 0;

    while (onBridge.length > 0 || truck_weights.length > 0) {
        // 이전에 answer를 1로 초기화했으므로 루프 시작 시에 answer를 증가시키지 않음

        // 트럭이 다리에 올라갈 수 있는지 확인
        if (truck_weights.length > 0 && totalWeight + truck_weights[0] <= weight) {
            const truck = truck_weights.shift();
            onBridge.push([truck, 0]);  // 다리에 트럭 추가 (두 번째 값은 시간을 나타냄)
            totalWeight += truck;
        }

        // 다리 위의 트럭을 한 칸씩 이동
        for (let i = 0; i < onBridge.length; i++) {
            onBridge[i][1]++;
        }

        // 다리를 다 건넌 트럭 제거
        if (onBridge.length > 0 && onBridge[0][1] === bridge_length) {
            totalWeight -= onBridge.shift()[0];
        }

        answer++;  // 루프가 한 번 실행될 때마다 answer를 1 증가시킴
    }

    return answer;
}