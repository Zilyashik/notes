const App = {
    data() { //метод для создание определенных данных для работы с Vue
        return { //в методе должны вернуть объект
            placeholderString: 'Введите название заметки',
            title: 'Список заметок',//должно быть приведено к строке всегда - правило
            inputValue: '',
            notes: ['Заметка 1', 'Заметка 2']
        }
    },
    methods: {
        addNewNote() {
            if (this.inputValue !== '') {
                this.notes.push(this.inputValue)
                this.inputValue = ''
            }
        },
        doubleCount() {
            return this.notes.length * 2
        },
        toUpperCase(item) {
            return item.toUpperCase()
        },
        removeNote(idx) {
            this.notes.splice(idx, 1)
        }
    },
    computed: {
        doubleCountComputed() {
            return this.notes.length * 2
        }
    },
    watch: { //может следить за тем, изменились ли какие-либо переменные или нет
        inputValue(value) {
            if (value.length > 10) {
                this.inputValue= ''
            }
        }
    }
}

Vue.createApp(App).mount('#app') //последнее вызывает

