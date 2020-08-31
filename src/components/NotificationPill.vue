<template>
    <div id="notificationPill" class="pill" :style="{'background-color':activeColor.Primary[0]['primary-1-900']}">
        <span :style="{'color':activeColor.Primary[0]['primary-1-050']}">{{notificationPillPayload.Msg}}</span><span class="close-btn" @click="$emit('closeNotificationPill')" :style="{'color':activeColor.Primary[0]['primary-1-050']}"><font-awesome-icon icon="times-circle" /></span>
    </div><!-- end #notificationPill -->
</template>

<script>
export default {
    name: "NotificationPill",
    props: ['notificationPillPayload', 'activeColor']
}
</script>

<style lang="scss" scoped>
#notificationPill {
    position: fixed;
    bottom: 12px;
    left: 50%;
    height: 25px;
    display: flex;
    align-items: center;
    padding: 15px 25px;
    border-radius: $border-radius;

    .close-btn {
        margin-left: 15px;
    }

    .close-btn:hover {
        cursor:pointer;
        color: $neutral-1-100;
    }
}
</style>