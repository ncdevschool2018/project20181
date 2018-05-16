package by.netcracker.validator;

import by.netcracker.entities.AccountEntity;
import org.springframework.stereotype.Component;
import org.springframework.validation.Errors;
import org.springframework.validation.Validator;

@Component
public class AccountValidator implements Validator {

    @Override
    public boolean supports(Class<?> aClass) {
        return AccountEntity.class.equals(aClass);
    }

    @Override
    public void validate(Object o, Errors errors) {
        AccountEntity accountEntity = (AccountEntity) o;

        if (!accountEntity.getConfirmPassword().equals(accountEntity.getPassword())) {
            errors.rejectValue("confirmPassword", "402","Password is not equals");

        }
    }
}
