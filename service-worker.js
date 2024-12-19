// تشغيل الإشعار الصوتي عند إرسال رسالة
function playNotification() {
    const audio = new Audio('notification-sound.mp3'); // يمكنك استخدام ملف صوتي هنا
    audio.play();
}

function sendMessage() {
    const userInput = document.getElementById('user-input').value;
    const chatBox = document.getElementById('chat-box');

    if (userInput.trim() !== "") {
        const messageDiv = document.createElement('div');
        messageDiv.classList.add('message', 'user');
        messageDiv.textContent = userInput;
        chatBox.appendChild(messageDiv);

        playNotification(); // تشغيل التنبيه الصوتي
    }

    document.getElementById('user-input').value = '';
    chatBox.scrollTop = chatBox.scrollHeight;
}

// إرسال الرسالة الصوتية
function recordAudio() {
    document.getElementById('audio-file').click();
}

function sendAudioMessage() {
    const audioFile = document.getElementById('audio-file').files[0];
    if (audioFile) {
        const messageDiv = document.createElement('div');
        messageDiv.classList.add('message', 'user');
        messageDiv.textContent = `تم إرسال رسالة صوتية: ${audioFile.name}`;
        document.getElementById('chat-box').appendChild(messageDiv);
    }
}

