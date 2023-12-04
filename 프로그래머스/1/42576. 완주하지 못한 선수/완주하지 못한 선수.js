const participant = ["marina", "josipa", "nikola", "vinko", "filipa"];
const completion = ["josipa", "filipa", "marina", "nikola"];

solution(participant, completion);

function solution(participant, completion) {
    participant.sort();
    completion.sort();
    for (let i = 0; i < completion.length; i++) {
        if (participant[i] !== completion[i]) {
            return participant[i];
        }
    }
    return participant[participant.length - 1];
}