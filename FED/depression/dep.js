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
    // axios.post(`${baseurl}/depression/`, answer1)
    //     .then((response) => {
    //         console.log(answer1);
    //         alert('You have chosen ' + ' ' + answer1);
    //         window.location.href = "/";
    //     })
    window.location.href = `/depression/${id}.html`;
};