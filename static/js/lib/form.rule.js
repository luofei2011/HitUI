hit.VALIDATE = {
    email: function(ele) {
        return /^[a-zA-Z0-9_-]+@[a-zA-Z0-9_-]+(\.[a-zA-Z0-9_-]+)+$/.test(ele.value);
    },
    ip: function(ele) {
        return /^(\d{1,2}|1\d\d|2[0-4]\d|25[0-5])(\.(\d{1,2}|1\d\d|2[0-4]\d|25[0-5])){3}$/.test(ele.value);
    },
    phone: function(ele) {
        return /^(1[35][0-9]{9})|(15[0-9]{9})|(18[0-9]{9})$/.test(ele.value);
    },
    size: function(ele) {
        if (minLen) {
            if (data.length < minLen)
                return false;
        } 

        if (maxLen) {
            if (data.length > maxLen)
                return false;
        }

        return true;
    },
    required: function(ele) {
        return ele.value ? true : false;
    },
    int: function(ele) {
        return /^-?\d+$/.test(ele.value);
    },
    float: function(ele) {
        return /^(-?\d+)(\.\d+)?$/.test(ele.value);
    }
};
