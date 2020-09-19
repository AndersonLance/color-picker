<template>
    <div>
        <div class="content-header content-header-extended" :style="{'background-color':activeColor.Primary[0]['primary-1-500']}">
            <div class="container">
                <div class="page-header-group">
                    <div class="title-metadata-pair">
                        <h1 :style="{'color': activeColor.Primary[0]['primary-1-050']}">{{palettes[activePaletteIndex].title}}</h1>
                        <h2 class="metadata-holder" :style="{'color': activeColor.Primary[0]['primary-1-050']}">
                            <span>{{colorsInPalette}} Colors</span>
                            <span>{{shadesInPalette}} Shades</span>
                        </h2>
                        <div class="metadata-holder"  :style="{'color':activeColor.Primary[0]['primary-1-100']}">
                            <span>Primary Colors ({{activePaletteColorCounts.Primary}})</span>
                            <span>Neutral Colors ({{activePaletteColorCounts.Neutral}})</span>
                            <span>Supporting Colors ({{activePaletteColorCounts.Supporting}})</span>
                        </div><!-- end metadata-holder -->
                    </div><!-- end title-metadata-pair -->
                    <div class="buttons-holder">
                        <span class="btn" @click="generateScssCode()" :style="{'background-color':activeColor.Primary[0]['primary-1-900'], 'color':activeColor.Primary[0]['primary-1-050']}"><font-awesome-icon icon="copy" /> SCSS</span>
                        <span class="btn" @click="generateTableauPrefs()" :style="{'background-color':activeColor.Primary[0]['primary-1-900'], 'color':activeColor.Primary[0]['primary-1-050']}"><font-awesome-icon icon="file-export" /> Tableau</span>
                    </div><!-- end buttons-holder -->
                </div><!-- end page-header-group -->
            </div><!-- end container -->
        </div><!-- end content-header content-header-extended -->
        <div class="container neg-margin-top">
            <div class="content-area palette-holder">
                <h3>Primary Colors</h3>
                <div class="colors-holder">
                    <div :key="colorGroup.id" v-for="colorGroup in palettes[activePaletteIndex].Primary">
                        <div class="color-preview" :style="{ backgroundColor: colorGroup['primary-' + colorGroup.id + '-500'] }"></div><h4>Primary {{colorGroup.id}} : <span class="lowercase">{{colorGroup.descriptor}}</span></h4>
                        <div class="color-group">
                            <div class="color-hex-pair">
                                <div class="color" :style="{ backgroundColor: colorGroup['primary-' + colorGroup.id + '-050'] }"></div>
                                <div class="hex">{{colorGroup['primary-' + colorGroup.id + '-050']}}</div>
                                <div class="scss-var">primary-{{colorGroup.id}}-050</div>
                            </div><!-- end color-hex-pair -->
                            <div class="color-hex-pair">
                                <div class="color" :style="{ backgroundColor: colorGroup['primary-' + colorGroup.id + '-100'] }"></div>
                                <div class="hex">{{colorGroup['primary-' + colorGroup.id + '-100']}}</div>
                                <div class="scss-var">primary-{{colorGroup.id}}-100</div>
                            </div><!-- end color-hex-pair -->
                            <div class="color-hex-pair">
                                <div class="color" :style="{ backgroundColor: colorGroup['primary-' + colorGroup.id + '-200'] }"></div>
                                <div class="hex">{{colorGroup['primary-' + colorGroup.id + '-200']}}</div>
                                <div class="scss-var">primary-{{colorGroup.id}}-200</div>
                            </div><!-- end color-hex-pair -->
                            <div class="color-hex-pair">
                                <div class="color" :style="{ backgroundColor: colorGroup['primary-' + colorGroup.id + '-300'] }"></div>
                                <div class="hex">{{colorGroup['primary-' + colorGroup.id + '-300']}}</div>
                                <div class="scss-var">primary-{{colorGroup.id}}-300</div>
                            </div><!-- end color-hex-pair -->
                            <div class="color-hex-pair">
                                <div class="color" :style="{ backgroundColor: colorGroup['primary-' + colorGroup.id + '-400'] }"></div>
                                <div class="hex">{{colorGroup['primary-' + colorGroup.id + '-400']}}</div>
                                <div class="scss-var">primary-{{colorGroup.id}}-400</div>
                            </div><!-- end color-hex-pair -->
                            <div class="color-hex-pair">
                                <div class="color" :style="{ backgroundColor: colorGroup['primary-' + colorGroup.id + '-500'] }"></div>
                                <div class="hex">{{colorGroup['primary-' + colorGroup.id + '-500']}}</div>
                                <div class="scss-var">primary-{{colorGroup.id}}-500</div>
                            </div><!-- end color-hex-pair -->
                            <div class="color-hex-pair">
                                <div class="color" :style="{ backgroundColor: colorGroup['primary-' + colorGroup.id + '-600'] }"></div>
                                <div class="hex">{{colorGroup['primary-' + colorGroup.id + '-600']}}</div>
                                <div class="scss-var">primary-{{colorGroup.id}}-600</div>
                            </div><!-- end color-hex-pair -->
                            <div class="color-hex-pair">
                                <div class="color" :style="{ backgroundColor: colorGroup['primary-' + colorGroup.id + '-700'] }"></div>
                                <div class="hex">{{colorGroup['primary-' + colorGroup.id + '-700']}}</div>
                                <div class="scss-var">primary-{{colorGroup.id}}-700</div>
                            </div><!-- end color-hex-pair -->
                            <div class="color-hex-pair">
                                <div class="color" :style="{ backgroundColor: colorGroup['primary-' + colorGroup.id + '-800'] }"></div>
                                <div class="hex">{{colorGroup['primary-' + colorGroup.id + '-800']}}</div>
                                <div class="scss-var">primary-{{colorGroup.id}}-800</div>
                            </div><!-- end color-hex-pair -->
                            <div class="color-hex-pair">
                                <div class="color" :style="{ backgroundColor: colorGroup['primary-' + colorGroup.id + '-900'] }"></div>
                                <div class="hex">{{colorGroup['primary-' + colorGroup.id + '-900']}}</div>
                                <div class="scss-var">primary-{{colorGroup.id}}-900</div>
                            </div><!-- end color-hex-pair -->
                        </div><!-- end color-group -->
                    </div>
                </div><!-- end colors-holder -->
                <h3>Neutral Colors</h3>
                <template v-if="palettes[activePaletteIndex].Neutral">
                <div class="colors-holder">
                    <div :key="colorGroup.id" v-for="colorGroup in palettes[activePaletteIndex].Neutral">
                        <div class="color-preview" :style="{ backgroundColor: colorGroup['neutral-' + colorGroup.id + '-500'] }"></div><h4>Neutral {{colorGroup.id}} : <span class="lowercase">{{colorGroup.descriptor}}</span></h4>
                        <div class="color-group">
                            <div class="color-hex-pair">
                                <div class="color" :style="{ backgroundColor: colorGroup['neutral-' + colorGroup.id + '-050'] }"></div>
                                <div class="hex">{{colorGroup['neutral-' + colorGroup.id + '-050']}}</div>
                                <div class="scss-var">neutral-{{colorGroup.id}}-050</div>
                            </div><!-- end color-hex-pair -->
                            <div class="color-hex-pair">
                                <div class="color" :style="{ backgroundColor: colorGroup['neutral-' + colorGroup.id + '-100'] }"></div>
                                <div class="hex">{{colorGroup['neutral-' + colorGroup.id + '-100']}}</div>
                                <div class="scss-var">neutral-{{colorGroup.id}}-100</div>
                            </div><!-- end color-hex-pair -->
                            <div class="color-hex-pair">
                                <div class="color" :style="{ backgroundColor: colorGroup['neutral-' + colorGroup.id + '-200'] }"></div>
                                <div class="hex">{{colorGroup['neutral-' + colorGroup.id + '-200']}}</div>
                                <div class="scss-var">neutral-{{colorGroup.id}}-200</div>
                            </div><!-- end color-hex-pair -->
                            <div class="color-hex-pair">
                                <div class="color" :style="{ backgroundColor: colorGroup['neutral-' + colorGroup.id + '-300'] }"></div>
                                <div class="hex">{{colorGroup['neutral-' + colorGroup.id + '-300']}}</div>
                                <div class="scss-var">neutral-{{colorGroup.id}}-300</div>
                            </div><!-- end color-hex-pair -->
                            <div class="color-hex-pair">
                                <div class="color" :style="{ backgroundColor: colorGroup['neutral-' + colorGroup.id + '-400'] }"></div>
                                <div class="hex">{{colorGroup['neutral-' + colorGroup.id + '-400']}}</div>
                                <div class="scss-var">neutral-{{colorGroup.id}}-400</div>
                            </div><!-- end color-hex-pair -->
                            <div class="color-hex-pair">
                                <div class="color" :style="{ backgroundColor: colorGroup['neutral-' + colorGroup.id + '-500'] }"></div>
                                <div class="hex">{{colorGroup['neutral-' + colorGroup.id + '-500']}}</div>
                                <div class="scss-var">neutral-{{colorGroup.id}}-500</div>
                            </div><!-- end color-hex-pair -->
                            <div class="color-hex-pair">
                                <div class="color" :style="{ backgroundColor: colorGroup['neutral-' + colorGroup.id + '-600'] }"></div>
                                <div class="hex">{{colorGroup['neutral-' + colorGroup.id + '-600']}}</div>
                                <div class="scss-var">neutral-{{colorGroup.id}}-600</div>
                            </div><!-- end color-hex-pair -->
                            <div class="color-hex-pair">
                                <div class="color" :style="{ backgroundColor: colorGroup['neutral-' + colorGroup.id + '-700'] }"></div>
                                <div class="hex">{{colorGroup['neutral-' + colorGroup.id + '-700']}}</div>
                                <div class="scss-var">neutral-{{colorGroup.id}}-700</div>
                            </div><!-- end color-hex-pair -->
                            <div class="color-hex-pair">
                                <div class="color" :style="{ backgroundColor: colorGroup['neutral-' + colorGroup.id + '-800'] }"></div>
                                <div class="hex">{{colorGroup['neutral-' + colorGroup.id + '-800']}}</div>
                                <div class="scss-var">neutral-{{colorGroup.id}}-800</div>
                            </div><!-- end color-hex-pair -->
                            <div class="color-hex-pair">
                                <div class="color" :style="{ backgroundColor: colorGroup['neutral-' + colorGroup.id + '-900'] }"></div>
                                <div class="hex">{{colorGroup['neutral-' + colorGroup.id + '-900']}}</div>
                                <div class="scss-var">neutral-{{colorGroup.id}}-900</div>
                            </div><!-- end color-hex-pair -->
                        </div><!-- end color-group -->
                    </div><!-- end color-text-pair -->
                </div><!-- end colors-holder -->
                </template>
                <template v-else>
                    <p class="margin-bottom-25">There are no neutral colors in the selected palette.</p>
                </template>
                <h3>Supporting Colors</h3>
                <div class="colors-holder">
                    <div :key="colorGroup.id" v-for="colorGroup in palettes[activePaletteIndex].Supporting">
                        <div class="color-preview" :style="{ backgroundColor: colorGroup['supporting-' + colorGroup.id + '-500'] }"></div><h4>Supporting {{colorGroup.id}} : <span class="lowercase">{{colorGroup.descriptor}}</span></h4>
                        <div class="color-group">
                            <div class="color-hex-pair">
                                <div class="color" :style="{ backgroundColor: colorGroup['supporting-' + colorGroup.id + '-050'] }"></div>
                                <div class="hex">{{colorGroup['supporting-' + colorGroup.id + '-050']}}</div>
                                <div class="scss-var">supporting-{{colorGroup.id}}-050</div>
                            </div><!-- end color-hex-pair -->
                            <div class="color-hex-pair">
                                <div class="color" :style="{ backgroundColor: colorGroup['supporting-' + colorGroup.id + '-100'] }"></div>
                                <div class="hex">{{colorGroup['supporting-' + colorGroup.id + '-100']}}</div>
                                <div class="scss-var">supporting-{{colorGroup.id}}-100</div>
                            </div><!-- end color-hex-pair -->
                            <div class="color-hex-pair">
                                <div class="color" :style="{ backgroundColor: colorGroup['supporting-' + colorGroup.id + '-200'] }"></div>
                                <div class="hex">{{colorGroup['supporting-' + colorGroup.id + '-200']}}</div>
                                <div class="scss-var">supporting-{{colorGroup.id}}-200</div>
                            </div><!-- end color-hex-pair -->
                            <div class="color-hex-pair">
                                <div class="color" :style="{ backgroundColor: colorGroup['supporting-' + colorGroup.id + '-300'] }"></div>
                                <div class="hex">{{colorGroup['supporting-' + colorGroup.id + '-300']}}</div>
                                <div class="scss-var">supporting-{{colorGroup.id}}-300</div>
                            </div><!-- end color-hex-pair -->
                            <div class="color-hex-pair">
                                <div class="color" :style="{ backgroundColor: colorGroup['supporting-' + colorGroup.id + '-400'] }"></div>
                                <div class="hex">{{colorGroup['supporting-' + colorGroup.id + '-400']}}</div>
                                <div class="scss-var">supporting-{{colorGroup.id}}-400</div>
                            </div><!-- end color-hex-pair -->
                            <div class="color-hex-pair">
                                <div class="color" :style="{ backgroundColor: colorGroup['supporting-' + colorGroup.id + '-500'] }"></div>
                                <div class="hex">{{colorGroup['supporting-' + colorGroup.id + '-500']}}</div>
                                <div class="scss-var">supporting-{{colorGroup.id}}-500</div>
                            </div><!-- end color-hex-pair -->
                            <div class="color-hex-pair">
                                <div class="color" :style="{ backgroundColor: colorGroup['supporting-' + colorGroup.id + '-600'] }"></div>
                                <div class="hex">{{colorGroup['supporting-' + colorGroup.id + '-600']}}</div>
                                <div class="scss-var">supporting-{{colorGroup.id}}-600</div>
                            </div><!-- end color-hex-pair -->
                            <div class="color-hex-pair">
                                <div class="color" :style="{ backgroundColor: colorGroup['supporting-' + colorGroup.id + '-700'] }"></div>
                                <div class="hex">{{colorGroup['supporting-' + colorGroup.id + '-700']}}</div>
                                <div class="scss-var">supporting-{{colorGroup.id}}-700</div>
                            </div><!-- end color-hex-pair -->
                            <div class="color-hex-pair">
                                <div class="color" :style="{ backgroundColor: colorGroup['supporting-' + colorGroup.id + '-800'] }"></div>
                                <div class="hex">{{colorGroup['supporting-' + colorGroup.id + '-800']}}</div>
                                <div class="scss-var">supporting-{{colorGroup.id}}-800</div>
                            </div><!-- end color-hex-pair -->
                            <div class="color-hex-pair">
                                <div class="color" :style="{ backgroundColor: colorGroup['supporting-' + colorGroup.id + '-900'] }"></div>
                                <div class="hex">{{colorGroup['supporting-' + colorGroup.id + '-900']}}</div>
                                <div class="scss-var">supporting-{{colorGroup.id}}-900</div>
                            </div><!-- end color-hex-pair -->
                        </div><!-- end color-group -->
                    </div><!-- end color-text-pair -->
                </div><!-- end colors-holder -->
            </div><!-- end content-area palette-holder -->
        </div><!-- end container neg-margin-top -->
    </div>
</template>

<script>
export default {
    name: 'ActivePaletteViewer',
    props: ['palettes', 'activePaletteId', 'activePaletteColorCounts', 'activeColor'],
    computed: {
        // Convert ID to index (Subtract 1)
        activePaletteIndex: function() {
            return this.activePaletteId - 1;
        },
        // Color Count
        colorsInPalette: function() {
            if (this.activePaletteColorCounts.Neutral) {
                // There is at least one neutral color in this palette
                return this.activePaletteColorCounts.Primary + this.activePaletteColorCounts.Neutral + this.activePaletteColorCounts.Supporting;
            } else {
                // There are no neutral colors in this palette
                return this.activePaletteColorCounts.Primary + this.activePaletteColorCounts.Supporting;
            }
        },
        // Shades Count
        shadesInPalette: function() {
            return this.colorsInPalette * 10;
        }
    },
    data () {
        return {
            modalPayload: {
                "Type": "",
                "Title": "",
                "Body": "",
                "XML": ""
            },
            notificationPillPayload: {
                "Msg": ""
            },
            ScssCode: "",
            tableauPrefs: ""
        }
    },
    methods: {
        buildModalPayload(type, xml) {
            if (type === 'tableau') {
                // SCSS
                this.modalPayload.Type = "tableau";
                this.modalPayload.Title = "Tableau Colors";
                this.modalPayload.Body = "You may copy the generated code to the clipboard, or export the code as a Preferences.tps file.";
                this.modalPayload.XML = xml;
            } else {
                // Tableau
                this.modalPayload.Title = "SCSS";
            }
            // Emit event to parent
            this.$emit('showModal', this.modalPayload);
        },
        generateScssCode() {
            // Generate SCSS code to then copy to clipboard

            // Clear var
            this.ScssCode = '// ' + this.palettes[this.activePaletteId].title + '\n';


            const primaryColors = this.palettes[this.activePaletteId].Primary;
            const supportingColors = this.palettes[this.activePaletteId].Supporting;
            
            // Loop through Primary color(s) in currently active palette, and write them to string
            for (const color of primaryColors) {
                this.ScssCode += '\n// Primary ' + color.id + '\n';

                // Loop through object keys
                for (const varName of Object.keys(color)) {
                    if (varName === 'id') {
                        // Skip id -- do nothing
                    } else {
                        // This is a varible we want to capture, add the key name and the actual value
                        this.ScssCode += '$' + varName + ': ' + color[varName] + ';\n';
                    }
                }
            }

            if (this.palettes[this.activePaletteId].Neutral) {
                // There is at least one neutral color in this palette
                const neutralColors = this.palettes[this.activePaletteId].Neutral;

                // Loop through Neutral color(s) in currently active palette, and write them to string
                for (const color of neutralColors) {
                    this.ScssCode += '\n// Neutral ' + color.id + '\n';

                    // Loop through object keys
                    for (const varName of Object.keys(color)) {
                        if (varName === 'id') {
                            // Skip id -- do nothing
                        } else {
                            // This is a varible we want to capture, add the key name and the actual value
                            this.ScssCode += '$' + varName + ': ' + color[varName] + ';\n';
                        }
                    }
                }
            }
            

            // Loop through Supporting color(s) in currently active palette, and write them to string
            for (const color of supportingColors) {
                this.ScssCode += '\n// Supporting ' + color.id + '\n';

                // Loop through object keys
                for (const varName of Object.keys(color)) {
                    if (varName === 'id') {
                        // Skip id -- do nothing
                    } else {
                        // This is a varible we want to capture, add the key name and the actual value
                        this.ScssCode += '$' + varName + ': ' + color[varName] + ';\n';
                    }
                }
            }

            // Call method to copy the code to the clipboard
            this.copyScssCode(this.ScssCode);
        },
        copyScssCode(newClip) {
            // Copy text to clipboard
            if (navigator.clipboard) {
                // navigator.clipboard exists (Chrome)
                navigator.clipboard.writeText(newClip).then(() => { // MUST use an arrow function otherwise 'this' keyword will not work
                    // Clipboard write successful
                    // Call method to show notification pill
                    this.notificationPillPayload.Msg = "SCSS code has been copied to the clipboard.";
                    this.$emit('showNotificationPill', this.notificationPillPayload);
                }, () => {
                    /* clipboard write failed */
                    //this.buildNotificationPill();
                    this.notificationPillPayload.Msg = "There has been an error copying data to the clipboard.";
                    this.$emit('showNotificationPill', this.notificationPillPayload);
                });
            } else {
                // navigator.clipboard doesn't exist (Edge)
                const el = document.createElement('textarea'); // Create new textarea element
                el.value = newClip; // Set value of textarea element equal to newClip being passed into function
                document.body.appendChild(el); // Append newly created element to the page
                el.select(); // Select the text in the element
                document.execCommand('copy'); // Copy the text to the clipboard
                document.body.removeChild(el); // Delete textarea element from the page
                this.notificationPillPayload.Msg = "SCSS code has been copied to the clipboard.";
                this.$emit('showNotificationPill', this.notificationPillPayload);
            }
            
        },
        generateTableauPrefs() {
            // Generate XML code for Tableau Preferences
            const primaryColors = this.palettes[this.activePaletteId].Primary;
            const supportingColors = this.palettes[this.activePaletteId].Supporting;
            const colorTypes = ['regular', 'ordered-sequential'];

            // Open XML tags
            this.tableauPrefs = "<?xml version='1.0'?>\n\n<workbook>\n\t<preferences>\n\t";

            // Loop through colorTypes (Create regular colors and ordered-sequential colors)
            for (const colorType of colorTypes) {
                // Loop through Primary color(s) in currently active palette, and write them to string
                for (const color of primaryColors) {
                    this.tableauPrefs += '\t<color-palette name="Primary ' + color.id + ' ' + colorType + '" type="' + colorType + '">\n';

                    // Loop through object keys
                    for (const varName of Object.keys(color)) {
                        if (varName === 'id' || varName === 'descriptor') {
                            // Skip id and descriptor -- do nothing
                        } else {
                            // This is a varible we want to capture, add the key name and the actual value
                            this.tableauPrefs += '\t\t\t<color>' + color[varName] + '</color>\n';
                        }
                    }

                    this.tableauPrefs += '\t\t</color-palette>\n';
                }
                
                if (this.palettes[this.activePaletteId].Neutral) {
                    // There is at least one neutral color in this color palette
                    const neutralColors = this.palettes[this.activePaletteId].Neutral;

                    for (const color of neutralColors) {
                        this.tableauPrefs += '\t<color-palette name="Neutral ' + color.id + ' ' + colorType +  '" type="' + colorType + '">\n';

                        // Loop through object keys
                        for (const varName of Object.keys(color)) {
                            if (varName === 'id' || varName === 'descriptor') {
                                // Skip id and descriptor -- do nothing
                            } else {
                                // This is a varible we want to capture, add the key name and the actual value
                                this.tableauPrefs += '\t\t\t<color>' + color[varName] + '</color>\n';
                            }
                        }

                        this.tableauPrefs += '\t\t</color-palette>\n';
                    }
                }

                // Loop through Supporting color(s) in currently active palette, and write them to string
                for (const color of supportingColors) {
                    this.tableauPrefs += '\t<color-palette name="Supporting ' + color.id + ' ' + colorType + '" type="' + colorType + '">\n';

                    // Loop through object keys
                    for (const varName of Object.keys(color)) {
                        if (varName === 'id' || varName === 'descriptor') {
                            // Skip id and descriptor -- do nothing
                        } else {
                            // This is a varible we want to capture, add the key name and the actual value
                            this.tableauPrefs += '\t\t\t<color>' + color[varName] + '</color>\n';
                        }
                    }

                    this.tableauPrefs += '\t\t</color-palette>\n';
                }
            }
            
            // Close out XML tags
            this.tableauPrefs += '\t</preferences>\n</workbook>';
            
            // Call method to build modal payload and pass in XML string
            this.buildModalPayload('tableau', this.tableauPrefs);
        }
    }
}
</script>

<style lang="scss" scoped>

h1, h2, h3, h4 {
    margin-bottom: 2px;
}

.margin-bottom-25 {
    margin-bottom: 25px;
}

.content-header {
    text-align: left;
}

.content-header.content-header-extended {
    padding-bottom: 100px;
}

.container {
    margin-left: auto;
    margin-right: auto;
    width: 1140px;
}

.container.neg-margin-top {
    margin-top: -75px;
}

.page-header-group {
    padding-top: 62px;
    display: flex;
    justify-content: space-between;
}

.title-metadata-pair {
    .metadata-holder {
        span {
            margin-right: 25px;
            font-size: .9rem;
        }
    }
}

.buttons-holder {
    display: flex;
    align-items: center;

    .btn:last-of-type {
        margin-right: 0;
        border: none;
    }

}

.content-area {
    background-color: $white;
    border-radius: $border-radius;
    padding: 25px;
    min-height: 300px;
    box-shadow: $depth-2;
    text-align: left;
    margin-bottom: 62px;
}

.palette-holder {
    text-align: left;

    h3 {
        margin-bottom: 10px;
        padding-bottom: 10px;
        border-bottom: solid 1px $neutral-1-700;
        color: $neutral-1-600;
    }

    .colors-holder {

        margin-bottom: 25px;

        h4 {
            margin-bottom: 10px;
            color: $neutral-1-500;
            text-transform: uppercase;
            font-size: .8rem;
            display: inline-block;

            .lowercase {
                text-transform: none;
            }
        }

        .color-preview {
                border-radius: 50%;
                width: 10px;
                height: 10px;
                display: inline-block;
                margin-right: 7px;
                border: solid 1px #333;
                margin-right: 10px;
        }

        .color-group {
            display: flex;
            justify-content: space-between;
            margin-bottom: 10px;

            .color-hex-pair {
                font-size: .7rem;
                text-align: center;
                margin-top: 5px;
                margin-right: 12px;
                margin-bottom: 12px;
                height: 80px;
                width: 80px;

                .scss-var {
                    font-size: .57rem;
                }
            }
        }

        .color {
            width: 60%;
            border-radius: 50%;
            height: 60%;
            display: inline-block;
            margin-bottom: 5px;
            box-shadow: $depth-1;
            border: solid 1px #333;
        }

    }
}

</style>