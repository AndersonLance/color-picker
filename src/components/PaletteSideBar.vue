<template>
    <div>
        <div class="palette-filter-holder">
            <div id="paletteFilter" v-bind:class="{ active: isActive }">
                <font-awesome-icon icon="filter" class="padding-left-10" />
                <input type="text" placeholder="Search by color: e.g. red, blue" v-model="search" v-on:focus="setActive" v-on:blur="deactivate" @keyup="showClearBtn(); setFilteredActiveClass()" />
                <font-awesome-icon icon="times" id="clearFilter" @click="clearFilterValue(); setFilteredActiveClass()" class="padding-right-10" />
            </div><!-- end #paletteFilter -->
        </div><!-- end palette-filter-holder -->
        <div class="selection-holder">
            <ul id="paletteList">
                <!-- Looping through items in pallettes prop, calling function on click to set new active palette and emit an event up to parent, binding active to class to number in activePaletteIndex -->
                <li class="palette-item flex-holder" v-bind:key="palette.id" v-for="(palette, index) in filteredPalettes" @click="$emit('setActivePaletteId', palette.id); updateFilteredIndex(index)" :class="{'active': index === filteredIndex}">
                    <div class="color-preview">
                        <h4 class="palette-title">{{palette.title}}</h4>
                        <!-- Use A, B, C in keys to avoid duplicate ID warning messages in console -->
                        <span class="color" v-bind:key="`A-${color.id}`" v-for="color in palette.Primary" :style="{ backgroundColor: color['primary-' + color.id + '-500'] }"></span>
                        <span class="color" v-bind:key="`B-${color.id}`" v-for="color in palette.Neutral" :style="{ backgroundColor: color['neutral-' + color.id + '-500'] }"></span>
                        <span class="color" v-bind:key="`C-${color.id}`" v-for="color in palette.Supporting" :style="{ backgroundColor: color['supporting-' + color.id + '-500'] }"></span>
                    </div><!-- end color-preview -->
                </li><!-- end palette-item -->
            </ul><!-- end #paletteList -->
        </div><!-- end selection-holder -->
    </div>
</template>

<script>

export default {
    name: 'PaletteSideBar',
    props: ["palettes", "activePaletteId"],
    data() {
        return {
            search: "",
            isActive: false,
            filteredIndex: 0
        }
    },
    methods: {
        setActive() {
            this.isActive = true;
        },
        deactivate() {
            this.isActive = false;
        },
        clearFilterValue() {
            this.search = "";
        },
        showClearBtn() {
            this.isHidden = false;
        },
        updateFilteredIndex(index) {
            this.filteredIndex = index;
        },
        setFilteredActiveClass() {
            // Look through filteredPalettes for any matching the activePaletteId. If found, set that item in sidebar as active. If not found, don't set anything active
            let _comp = this;
            let _activePaletteIndex = 0;
            let _paletteFound = false;
            this.filteredPalettes.forEach(function(item, index) {
                if (item.id === _comp.activePaletteId) {
                    // This is the active ID, and it is still in the filtered list, so set it as active
                    _activePaletteIndex = index;
                    _paletteFound = true;
                }
            })
            // Check to see if the active palette was found in the filtered list
            if (_paletteFound) {
                // Active palette was found, update component with new index of the item
                this.filteredIndex = _activePaletteIndex;
            } else {
                // Active palette is not in the filtered list, set value to false so active class isn't added to any items
                this.filteredIndex = false;
            }
        }
    },
    computed: {
        filteredPalettes: function() {
            let _comp = this;
            return this.palettes.filter((palette) => {
                return palette.descriptors.match(_comp.search);
            });
        }
    }
}
</script>

<style lang="scss" scoped>

.palette-filter-holder {
        
    position: fixed;
    width: 250px;
}

#paletteFilter {
    background-color: $white;
    display: flex;
    align-items: center;
    color: $neutral-1-400;
    font-size: .8rem;
    border-bottom: solid 2px $neutral-1-300;
    height: 38px;

    #clearFilter {
        color: $white;
    }

    &.active {
        color: $primary-1-500;
        background-color: $neutral-1-050;

        input {
            border-bottom: solid 2px $primary-1-500;
            background-color: $neutral-1-050;
        }

        #clearFilter {
            color: $primary-1-500;

            &:hover {
                color: $primary-1-600;
            }
        }


    }

    .padding-left-10 {
        padding-left: 10px;
    }

    .padding-right-10 {
        padding-right: 10px;
    }

    input {
        height: 20px;
        width: 100%;
        margin-left: 8px;
        margin-right: 8px;
        background-color: $white;
        border: none;
        color: $neutral-1-400;
        padding-left: 5px;
        padding-right: 5px;
        &:focus {
            outline: none;
        }
    }

    // Make placeholder text transparent when user focuses on field
    input:focus::-webkit-input-placeholder { color:transparent; }
    input:focus:-moz-placeholder { color:transparent; } /* Firefox 18- */
    input:focus::-moz-placeholder { color:transparent; } /* Firefox 19+ */
    input:focus:-ms-input-placeholder { color:transparent; } /* oldIE ;) */

    #clearFilter {

        margin-left: auto;
        
        &:hover {
            cursor: pointer;
        }
    }
}

.flex-item.no-padding {
    padding: 0;
}

.selection-holder {
    flex: 1 0 250px;
}

li {
    padding: 25px;
    border-left: solid 4px transparent;
    border-bottom: solid 1px $neutral-1-200;

    .color-preview {

        text-align: left;

        h4 {
            margin-bottom: 10px;
            text-align: left;
            color: $neutral-1-700;
        }

        .color {
            border-radius: 50%;
            width: 18px;
            height: 18px;
            display: inline-block;
            margin-right: 7px;
            border: solid 1px #333;
        }

    }
}

li:hover {
    background-color: $neutral-1-100;
    cursor: pointer;
}

li.active {
    border-left-color: $neutral-1-500;
    background-color: $neutral-1-100;
}

li:first-of-type {
    margin-top: 38px; // Extra margin to account for filter box at top so all info is on screen
}

// Scrollbar
/* width */
::-webkit-scrollbar {
  width: 5px;
}

/* Track */
::-webkit-scrollbar-track {
  background: transparent;
}

/* Handle */
::-webkit-scrollbar-thumb {
  background: $neutral-1-300;
}

/* Handle on hover */
::-webkit-scrollbar-thumb:hover {
  background: $neutral-1-600;
}

</style>