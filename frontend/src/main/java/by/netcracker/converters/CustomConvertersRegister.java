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
package by.netcracker.converters;

import org.springframework.beans.factory.InitializingBean;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.core.convert.support.ConversionServiceFactory;
import org.springframework.core.convert.support.GenericConversionService;

import java.util.Set;


public class CustomConvertersRegister implements InitializingBean {

    private GenericConversionService conversionService;

    @Autowired
    public void setConversionService(GenericConversionService conversionService) {
        this.conversionService = conversionService;
    }

    private Set<?> converters;

    public CustomConvertersRegister() {
    }

    public void setConverters(Set<?> converters) {
        this.converters = converters;
    }

    public void afterPropertiesSet() throws Exception {
        ConversionServiceFactory.registerConverters(this.converters, this.conversionService);
    }
}
