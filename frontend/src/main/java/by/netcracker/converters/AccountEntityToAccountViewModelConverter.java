package by.netcracker.converters;

import by.netcracker.entities.AccountEntity;
import by.netcracker.models.AccountViewModel;
import org.springframework.core.convert.converter.Converter;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.SimpleGrantedAuthority;

import java.util.ArrayList;
import java.util.List;

public class AccountEntityToAccountViewModelConverter implements Converter<AccountEntity, AccountViewModel> {
    @Override
    public AccountViewModel convert(AccountEntity accountEntity) {
        List<GrantedAuthority> authorities = new ArrayList<>();
        authorities.add(new SimpleGrantedAuthority(accountEntity.getRole()));

        AccountViewModel accountViewModel = new AccountViewModel(accountEntity.getLogin(),accountEntity.getPassword(),authorities);

        accountViewModel.setIdAccount(String.valueOf(accountEntity.getId()));
        accountViewModel.setFirstname(accountEntity.getFirstname());
        accountViewModel.setLastname(accountEntity.getLastname());
        accountViewModel.setPatronymic(accountEntity.getPatronymic());

        return accountViewModel;
    }
}
