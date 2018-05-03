
package by.netcracker.security.impl;


import by.netcracker.entities.AccountEntity;
import by.netcracker.models.AccountViewModel;
import by.netcracker.services.AccountService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;

import java.util.ArrayList;
import java.util.List;


public class CustomUserDetailsService implements UserDetailsService {

    private AccountService accountService;

    @Autowired
    public void setAccountService(AccountService accountService) {
        this.accountService = accountService;
    }

    public UserDetails loadUserByUsername(final String username)
            throws UsernameNotFoundException {

        List<AccountEntity> accountEntities = accountService.findUserByUserName(username);

        if (accountEntities.size() != 1) {
            throw new UsernameNotFoundException("Username not found");//todo rewrite exception message
        }
        AccountEntity accountEntity = accountEntities.get(0);
        List<GrantedAuthority> authorities = new ArrayList<>();
        authorities.add(new SimpleGrantedAuthority(accountEntity.getRole()));
        return buildUserForAuthentication(accountEntity, authorities);
    }

    private CustomUser buildUserForAuthentication(AccountEntity accountEntity, List<GrantedAuthority> authorities) {
        AccountViewModel accountViewModel = new AccountViewModel(accountEntity.getLogin(), accountEntity.getPassword(), authorities);
        accountViewModel.setFirstname(accountEntity.getFirstname());
        accountViewModel.setLastname(accountEntity.getLastname());
        accountViewModel.setPatronymic(accountEntity.getPatronymic());
        accountViewModel.setEmail(accountEntity.getEmail());
        accountViewModel.setIdAccount(String.valueOf(accountEntity.getId()));

        return accountViewModel;
    }


}
