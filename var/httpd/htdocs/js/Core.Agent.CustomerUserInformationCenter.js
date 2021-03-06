// --
// Copyright (C) 2001-2018 OTRS AG, http://otrs.com/
// --
// This software comes with ABSOLUTELY NO WARRANTY. For details, see
// the enclosed file COPYING for license information (AGPL). If you
// did not receive this file, see http://www.gnu.org/licenses/agpl.txt.
// --

"use strict";

var Core = Core || {};
Core.Agent = Core.Agent || {};

/**
 * @namespace Core.Agent.CustomerUserInformationCenter
 * @memberof Core.Agent
 * @author OTRS AG
 * @description
 *      This namespace contains the special module functions for CustomerUserInformationCenter.
 */
Core.Agent.CustomerUserInformationCenter = (function (TargetNS) {

    /**
     * @name Init
     * @memberof Core.Agent.CustomerUserInformationCenter
     * @function
     * @description
     *      This function binds click event for opening search dialog.
     */
    TargetNS.Init = function () {

        // Binds event for opening search dialog
        $('#CustomerUserInformationCenterHeading').on('click', function() {
            Core.Agent.CustomerUserInformationCenterSearch.OpenSearchDialog();
            return false;
        });

    };

    Core.Init.RegisterNamespace(TargetNS, 'APP_MODULE');

    return TargetNS;
}(Core.Agent.CustomerUserInformationCenter || {}));
