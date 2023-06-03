#include "CalcResourceFactory.h"

CalcResourceFactory::CalcResourceFactory() {
    _resource = make_shared<Resource>();
    _resource->set_path(
        "/{operation: add|subtract|multiply|divide}"
        "/{num1: [-+]?[0-9]*\\.?[0-9]*}"
        "/{num2: [-+]?[0-9]*\\.?[0-9]*}"
    );
    _resource->set_method_handler("GET", [](const shared_ptr<Session> session)){
        get_handler(session);
    });
}

void CalcResourceFactory::get_handler(const shared_ptr<Session> session) {
    
}