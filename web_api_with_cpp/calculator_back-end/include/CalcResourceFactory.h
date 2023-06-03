#pragma once

#include "IResourceFactory.h"

class CalcResourceFactory : public IResourceFactory {

public:
    CalcResourceFactory();
    std::shared_ptr<Resource> get_resource() const final;

private:

    void get_handler(const shared_ptr<Session> session);
    shared_ptr<Resource> _resource;
}