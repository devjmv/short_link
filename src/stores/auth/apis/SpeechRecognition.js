export const SpeechRecognitionService = {
  /* global webkitSpeechRecognition */

  recognition: null,

  initialize() {
    if ('webkitSpeechRecognition' in window) {
      this.recognition = new webkitSpeechRecognition()
      this.recognition.continuous = false
      this.recognition.interimResults = false
      this.recognition.lang = 'en-US'

      this.recognition.onresult = (event) => {
        const transcript = event.results[0][0].transcript
        this.onResult(transcript)
      }

      this.recognition.onend = () => {
        console.log('Speech recognition ended')
      }
    } else {
      console.error('Speech recognition is not supported in this browser.')
    }
  },

  startRecognition(onResult) {
    this.onResult = onResult
    this.recognition.start()
  },

  stopRecognition() {
    if (this.recognition) {
      this.recognition.stop()
    }
  }
}
