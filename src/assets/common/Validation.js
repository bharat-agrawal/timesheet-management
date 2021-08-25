const ValidationMessage = {
            required: "This field is required",
            required_group: "Please fill at least 1 of these fields.",
            requiredWithName: "Please enter {{1}}",
            matches: "This field must match the {{1}} field",
            email: "This field must contain a valid email address",
            emails: "This field must contain all valid email addresses",
            siteName: "This field must contain a valid site name",
            url: "This field must contain a valid URL",
            phone: "This field must contain a 10 digit number",
            date: "This field must contain valid date{{1}}",
            minLength: function (value) {
                let message = "This field must be at least {{1}} characters in length";
                return message.replace("{{1}}",value);
            },
            maxLength: function (value) {
                let message = "This field must not exceed {{1}} characters in length";
                return message.replace("{{1}}",value);
            },
            exactLength: "This field must be exactly {{1}} characters in length",
            rangeLength: "This field must be {{1}} characters in length",
            lessThan: "This field must contain a number less than {{1}}",
            greaterThan: "This field must contain a number greater than {{1}}",
            exact: "This field must contain a number equals to {{1}}",
            range: "This field must contain a number in range {{1}}",
            alpha: "This field must only contain alphabetical characters",
            alphaNumeric: "This field must only contain alpha-numeric characters",
            alphaDash: "This field must only contain alpha-numeric characters, underscores, and dashes",
            numeric: "This field must contain only numbers",
            integer: "This field must contain an integer",
            decimal: "This field must contain a decimal number",
            extension: "This field must contain only {{1}} file",
            extensions: "This field must contain only {{1}} files"
    };


export default ValidationMessage;