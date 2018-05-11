/*
 This software is the confidential information and copyrighted work of
 NetCracker Technology Corp. ("NetCracker") and/or its suppliers and
 is only distributed under the terms of a separate license agreement
 with NetCracker.
 Use of the software is governed by the terms of the license agreement.
 Any use of this software not in accordance with the license agreement
 is expressly prohibited by law, and may result in severe civil
 and criminal penalties. 
 
 Copyright (c) 1995-2017 NetCracker Technology Corp.
 
 All Rights Reserved.
 
*/
/*
 * Copyright 1995-2017 by NetCracker Technology Corp.,
 * University Office Park III
 * 95 Sawyer Road
 * Waltham, MA 02453
 * United States of America
 * All rights reserved.
 */
package by.netcracker.security.impl;


import by.netcracker.enumiration.AccountRole;
import by.netcracker.enumiration.ViewName;
import by.netcracker.security.LoginUserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.web.authentication.WebAuthenticationDetails;
import org.springframework.stereotype.Service;
import org.springframework.util.CollectionUtils;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.util.List;


@Service
public class LoginUserServiceImpl implements LoginUserService {

    private AuthenticationManager authenticationManager;

    @Autowired
    @Qualifier("authenticationManager")
    public void setAuthenticationManager(AuthenticationManager authenticationManager) {
        this.authenticationManager = authenticationManager;
    }

    public void authenticateUserAndSetSession(String username, String password, HttpServletRequest request, HttpServletResponse response) {

        UsernamePasswordAuthenticationToken token = new UsernamePasswordAuthenticationToken(username, password);
        token.setDetails(new WebAuthenticationDetails(request));
        Authentication authenticatedUser = authenticationManager.authenticate(  new UsernamePasswordAuthenticationToken( username, password  ));
        SecurityContextHolder.getContext().setAuthentication(authenticatedUser);
    }

    public String resolveHomeView(List<GrantedAuthority> authorities) {
        if (!CollectionUtils.isEmpty(authorities)) {
            String authority = authorities.get(0).getAuthority();
            if (authority.equalsIgnoreCase(AccountRole.ROLE_STUDENT)) {
                return "redirect:/studentsViewStudent";
            }
            if(authority.equalsIgnoreCase(AccountRole.ROLE_HEAD)){
                return "redirect:/studentsViewHead";
            }
            if (authority.equalsIgnoreCase(AccountRole.ROLE_ADMIN)) {
                return "redirect:/studentsViewAdmin";
            }
        }
        return "redirect:/authorization";
        //return "redirect:/login-page";
    }

}
