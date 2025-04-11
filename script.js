document.addEventListener("DOMContentLoaded", function () {
    const groups = document.querySelectorAll('.group-card');
    const moodSelect = document.getElementById('mood');
    const setMoodBtn = document.getElementById('setMood');
    const moodResult = document.getElementById('moodResult');

    let selectedGroup = null;

    // Handle group card clicks
    groups.forEach(group => {
        group.addEventListener('click', () => {
            groups.forEach(g => g.classList.remove('active'));
            group.classList.add('active');
            selectedGroup = group.getAttribute('data-group');
        });
    });

    // Handle Set Mood button click
    setMoodBtn.addEventListener('click', () => {
        const selectedMood = moodSelect.value;
        if (!selectedGroup) {
            alert("Please select a K-pop group.");
            return;
        }

        if (!selectedMood) {
            alert("Please select a mood.");
            return;
        }

        // Clear previous results
        moodResult.innerHTML = "";

        const moodData = groupData[selectedGroup][selectedMood];

        if (!moodData) {
            moodResult.innerHTML = `<p>No data available for this mood.</p>`;
            return;
        }

        const resultHTML = `
            <div class="result-card">
                <h2>${selectedGroup} - ${capitalizeFirstLetter(selectedMood)} Vibes</h2>
                <img src="${moodData.image}" alt="${selectedGroup} ${selectedMood}" class="result-image" />
                <p class="quote">"${moodData.quote}"</p>
                <div class="video-container">
                    <iframe width="560" height="315" src="${moodData.video}" frameborder="0" allowfullscreen></iframe>
                </div>
            </div>
        `;
        moodResult.innerHTML = resultHTML;
    });

    function capitalizeFirstLetter(string) {
        return string.charAt(0).toUpperCase() + string.slice(1);
    }
});
