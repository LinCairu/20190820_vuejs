var addTaskApp = new Vue({
    el: "#addTask",
    data: {
        currentIndex: -1,
        doTitle: "",
        isBtnStyleYellow: true,
        isBtnStyleGrey: false,
    },
    methods: {
        addButtonClick: function () {
            if (this.currentIndex < 0) {
                var newItem = {
                    doTitle: this.doTitle,
                    isBtnStyleYellow: true,
                    isBtnStyleGrey: false
                }
                taskApp.addListHere.push(newItem);
                addTaskApp.doTitle = "";
            } else {
                taskApp.addListHere[this.currentIndex].doTitle = this.doTitle;
                addTaskApp.doTitle = "";
                addTaskApp.currentIndex = -1;
            }
        }
    }
})


var taskApp = new Vue({
    el: "#task",
    data: {
        addListHere: [
            { doTitle: "看醫生", isBtnStyleYellow: true, isBtnStyleGrey: false, isButtonDisabled: false },
            { doTitle: "睡覺", isBtnStyleYellow: true, isBtnStyleGrey: false, isButtonDisabled: false },
            { doTitle: "玩耍", isBtnStyleYellow: true, isBtnStyleGrey: false, isButtonDisabled: false },
            { doTitle: "帶小孩", isBtnStyleYellow: true, isBtnStyleGrey: false, isButtonDisabled: false },
            { doTitle: "逛街", isBtnStyleYellow: true, isBtnStyleGrey: false, isButtonDisabled: false }
        ],
    },
    methods: {
        editButtonClick: function (idx) {
            addTaskApp.currentIndex = idx;
            addTaskApp.doTitle = this.addListHere[idx].doTitle;
        },
        deleteButtonClick: function (idx) {
            this.addListHere.splice(idx, 1);
        },
        okButtonClick: function (idx) {
            changColorY = this.addListHere[idx].isBtnStyleYellow;
            changColorG = this.addListHere[idx].isBtnStyleGrey;
            if (this.addListHere[idx].isBtnStyleYellow == true) {
                changeColor = {
                    doTitle: this.addListHere[idx].doTitle,
                    isBtnStyleYellow: false,
                    isBtnStyleGrey: true,
                    isButtonDisabled: true
                }
                this.addListHere.push(changeColor);
                this.addListHere.splice(idx, 1);
            } else {
                changeColor = {
                    doTitle: this.addListHere[idx].doTitle,
                    isBtnStyleYellow: true,
                    isBtnStyleGrey: false,
                    isButtonDisabled: false
                }
                this.addListHere.splice(idx, 1);
                this.addListHere.unshift(changeColor);
            }
        }
    }
})

