<template>
    <div id="modalHolder" class="modal">
        <div class="modal-content" :style="{'background-color':activeColor.Neutral[0]['neutral-1-100'], 'color':activeColor.Neutral[0]['neutral-1-700'], 'border-left': 'solid 5px ' + activeColor.Primary[0]['primary-1-700']}">
            <div class="modal-content-header">
                <span class="modal-title" :style="{'color':activeColor.Neutral[0]['neutral-1-800']}">{{modalPayload.Title}}</span>
                <span class="close-btn" @click="$emit('closeModal')"><font-awesome-icon icon="times-circle" /></span>
            </div><!-- end modal-header -->
            <div class="modal-body">
                <p>{{modalPayload.Body}}</p>
            </div>
            <div v-if="modalPayload.Type === 'tableau'" class="tableau-export">
                <textarea id="xml" v-bind:value="modalPayload.XML" readonly />
                <span class="action-link" @click="copyXml()" :style="{'color':activeColor.Primary[0]['primary-1-600']}"><font-awesome-icon icon="copy" /> Copy to Clipboard</span>
                <span class="action-link" @click="exportXml()" :style="{'color':activeColor.Primary[0]['primary-1-600']}"><font-awesome-icon icon="file-export" /> Export Preferences.tps</span>
            </div><!-- end modal-btns-bar -->
        </div><!-- end modal-content -->
    </div><!-- end #modalHolder -->
</template>

<script>
export default {
    name: 'Modal',
    props: ['modalPayload', 'activeColor'],
    methods: {
        copyXml() {
            // Copy text inside textarea to clipboard
            const el = document.getElementById('xml'); // Create new textarea element
            el.select(); // Select the text in the element
            document.execCommand('copy'); // Copy the text to the clipboard
            // Deselect previously selected text
            if (window.getSelection) {
                window.getSelection().removeAllRanges();
            } else if (document.selection) {
                document.selection.empty();
            }
        },
        exportXml() {
            var el = document.getElementById('xml'); // Get textarea element
            const text = el.value; // Store value of textarea element
            const filename = 'Preferences.tps'; // Filename of file to download
            var file = document.createElement('a'); // Create a new element
            file.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(text)); // Set attributes of new element, place contents of textarea into file
            file.setAttribute('download', filename);
            file.style.display = 'none'; // Hide element when we insert it into DOM
            document.body.appendChild(file); // Insert element into DOM
            file.click(); // Execute click event to trigger file download
            document.body.removeChild(file); // Remove element from DOM
        }
    }
}
</script>

<style lang="scss" scoped>

.modal {
    position: fixed;
    z-index: 2;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    overflow: auto;
    background-color: rgb(0,0,0); // Fallback
    background-color: rgba(0,0,0,0.4); // Black with opacity
}

.modal-content {
    background-color: $neutral-1-100;
    margin: 15% auto;
    padding: 30px;
    border-radius: $border-radius;
    box-shadow: $depth-5;
    width: 45%;
    text-align: left;

    .modal-content-header {
        display: flex;
        justify-content: space-between;
        margin: -30px -30px 0 -30px;
        padding: 15px 30px;
        align-items: center;
        border-top-left-radius: $border-radius;
        border-top-right-radius: $border-radius;
    }

    .close-btn {
        margin-right: -15px; // Improve spacing look of close button by dipping into padding of modal
    }

    .close-btn:hover, .close-btn:focus {
        color: $neutral-1-900;
        text-decoration: none;
        cursor: pointer;
    }

    .modal-title {
        font-weight: 600;
        margin-right: 10px;
    }
    
    .modal-body {
        margin-top: 15px;
    }

    .tableau-export {
        margin-top: 15px;
        position: relative;

        textarea {
            width: 100%;
            height: 100px;
            border-radius: $border-radius;
            padding: 20px 60px 20px 20px;
            resize: none;
            box-sizing: border-box;
            margin-bottom: 15px;
        }

        .action-link {
            margin-right: 15px;
            cursor: pointer;
        }

        .action-link:hover {
            text-decoration: underline;
        }
    }

}

</style>