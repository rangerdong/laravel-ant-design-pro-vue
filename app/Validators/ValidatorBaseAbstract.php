<?php
namespace App\Validators;

use App\Exceptions\ValidatorRenderException;
use Illuminate\Contracts\Validation\Factory;

abstract class ValidatorBaseAbstract
{
    protected $rules = [];
    protected $messages = [];
    protected $attributes = [];

    protected $data = [];
    protected $errors = [];
    protected $error_message;
    protected $validator;
    protected $is_pass = false;

    /**
     * ValidatorBaseAbstract constructor.
     *
     * @param \Illuminate\Contracts\Validation\Factory $validator
     */
    public function __construct(Factory $validator)
    {
        $this->validator = $validator;
    }

    /**
     * @param null $action
     *
     * @return array
     */
    public function getRules($action = null): array
    {
        $rules = $this->rules;
        if (isset($this->rules[$action]))
            $rules = $this->rules[$action];
        return $rules;
    }

    /**
     * @param array $rules
     *
     * @return \App\Validators\ValidatorBaseAbstract
     */
    public function setRules(array $rules)
    {
        $this->rules = $rules;
        return $this;
    }

    /**
     * @return array
     */
    public function getMessages(): array
    {
        return $this->messages;
    }

    /**
     * @param array $messages
     *
     * @return \App\Validators\ValidatorBaseAbstract
     */
    public function setMessages(array $messages)
    {
        $this->messages = $messages;
        return $this;
    }

    /**
     * @return array
     */
    public function getAttributes(): array
    {
        return $this->attributes;
    }

    /**
     * @param array $attributes
     */
    public function setAttributes(array $attributes): void
    {
        $this->attributes = $attributes;
    }

    public function passes($action = null, $exception = true)
    {
        $rules      = $this->getRules($action);
        $messages   = $this->getMessages();
        $attributes = $this->getAttributes();
        $validator  = $this->validator->make($this->data, $rules, $messages, $attributes);
        if ($validator->fails()) {
            $this->setIsPass(false)
                ->setErrors($validator->errors()->toArray())
                ->setErrorMessage($validator->errors()->first());
            if ($exception) {
                throw new ValidatorRenderException($this);
            } else {
                return false;
            }
        }
        $this->setIsPass(true);
        return true;
    }

    public function with($data = [])
    {
        $this->data = $data;
        return $this;
    }

    public function getFields($action = null)
    {
        if (isset($this->rules[$action])) {
            $keys =  array_keys($this->rules[$action]);
        } else {
            $keys = array_keys($this->rules);
        }
        return $keys;
    }

    /**
     * @return array
     */
    public function getErrors(): array
    {
        return $this->errors;
    }

    /**
     * @param array $errors
     * @return ValidatorBaseAbstract
     */
    public function setErrors(array $errors): ValidatorBaseAbstract
    {
        $this->errors = $errors;
        return $this;
    }

    /**
     * @return mixed
     */
    public function getErrorMessage()
    {
        return $this->error_message;
    }

    /**
     * @param mixed $error_message
     */
    public function setErrorMessage($error_message): void
    {
        $this->error_message = $error_message;
    }

    /**
     * @param bool $is_pass
     * @return ValidatorBaseAbstract
     */
    public function setIsPass(bool $is_pass): ValidatorBaseAbstract
    {
        $this->is_pass = $is_pass;
        return $this;
    }

    /**
     * @return bool
     */
    public function isPass(): bool
    {
        return $this->is_pass;
    }


}
