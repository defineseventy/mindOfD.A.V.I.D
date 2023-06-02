function clickFunc(id, ans) {
    var answer = [];
    var scene = id.slice(1, 2);
    var opt = id.slice(0, 1).toUpperCase();
    answer[parseInt(scene) - 1] =  scene + opt;
    console.log(answer);
    localStorage.setItem("answers", JSON.stringify(answer));
    var answers = localStorage.getItem("answers");
    console.log(answers);
    const text = id.slice(0, 1) + '. ' + ans;
    alert("you have chosen " + text)
    let baseurl = `https://localhost:3000`;
    axios.post(`${baseurl}/depression/`, answers)
        .then((response) => {
            console.log(answers);
            alert('You have chosen ' + ' ' + answers);
            window.location.href = "/";
        })
    // window.location.href = `/depression/${id}`;
};