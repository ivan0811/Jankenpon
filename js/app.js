var TagBody = document.getElementById("play-body");
var modal = document.getElementById('modal');

var HasilPlayer;
var GetImagePlayer = ['image/hand.png', 'image/hand_rock.png', 'image/hand_scissors.png'];
var ScoreCPU = 0;
var ScorePlayer = 0;

function ulangi() {
    ScoreCPU = 0;
    ScorePlayer = 0;
    document.getElementById("PlayerScore").innerHTML = 0;
    document.getElementById("CPUScore").innerHTML = 0;
    modal.style.display = "none";
    TagBody.style.overflow = "auto";
}

var TampilHasil = function (result, player, cpu) {
    document.getElementById("PlayerScore").innerHTML = player;
    document.getElementById("CPUScore").innerHTML = cpu;
    document.getElementById("player").innerHTML = player;
    document.getElementById("CPU").innerHTML = cpu;
    document.getElementById("result").innerHTML = result;
}

var CloseModal = function () {
    modal.style.display = "none";
    TagBody.style.overflow = "auto";
}

function TampilModal(x) {
    HasilPlayer = x;
    modal.style.display = "block";
    TagBody.style.overflow = "hidden";
    var ImagePlayer = document.getElementById('img_player');
    ImagePlayer.src = GetImagePlayer[x];
    CpuPlay();
}

function Result(Player, CPU) {
    switch (Player) {
        case CPU:
            TampilHasil('Sama', ScorePlayer, ScoreCPU);
            break;
        case 0:
            if (CPU == 1) {
                TampilHasil('Menang', ScorePlayer += 1, ScoreCPU);
            } else if (CPU == 2) {
                TampilHasil('Kalah', ScorePlayer, ScoreCPU += 1);
            }
            break;
        case 1:
            if (CPU == 2) {
                TampilHasil('Menang', ScorePlayer += 1, ScoreCPU);
            } else {
                TampilHasil('Kalah', ScorePlayer, ScoreCPU += 1);
            }
            break;
        case 2:
            if (CPU == 0) {
                TampilHasil('Menang', ScorePlayer += 1, ScoreCPU);
            } else {
                TampilHasil('Kalah', ScorePlayer, ScoreCPU += 1);
            }
            break;
    }
}

function CpuPlay() {
    var selesai = false;
    var GetImage = ['image/hand.png', 'image/hand_rock_green.png', 'image/hand_scissors_red.png'];
    var GetColorCycle = ["img-rounded", "img-rounded-green", "img-rounded-red"];
    var CpuImage = document.getElementById('cpu_image');
    var CpuPick = Math.floor(Math.random() * 3);
    var Titik = '';
    for (let i = 0; i < 10; i++) {
        for (let index = 0; index < 3; index++) {
            setTimeout(function () {
                setTimeout(function () {
                    if (i > 8) {
                        index = CpuPick;
                    }
                    setTimeout(function () {
                        if (i < 3) {
                            Titik += '.';
                            document.getElementById("result").innerHTML = Titik;
                            if (Titik == '...') {
                                Titik = '';
                            }
                        }
                    }, i * 500);
                    CpuImage.src = GetImage[index];
                    CpuImage.className = GetColorCycle[index];
                }, index * 100);
            }, i * 300);
        }
    }
    setTimeout(function () {
        Result(HasilPlayer, CpuPick);
    }, 2700);

}