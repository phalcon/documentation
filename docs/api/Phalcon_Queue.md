---
layout: default
title: 'Phalcon\Queue\Beanstalk'
---
# Class **Phalcon\Queue\Beanstalk**

<a href="https://github.com/phalcon/cphalcon/tree/v3.4.0/phalcon/queue/beanstalk.zep" class="btn btn-default btn-sm">Source on GitHub</a>

Class to access the beanstalk queue service.
Partially implements the protocol version 1.2

```php
<?php

use Phalcon\Queue\Beanstalk;

$queue = new Beanstalk(
    [
        "host"       => "127.0.0.1",
        "port"       => 11300,
        "persistent" => true,
    ]
);

```


## Constants
*integer* **DEFAULT_DELAY**

*integer* **DEFAULT_PRIORITY**

*integer* **DEFAULT_TTR**

*string* **DEFAULT_TUBE**

*string* **DEFAULT_HOST**

*integer* **DEFAULT_PORT**

## Methods
public  **__construct** ([*array* $parameters])





public  **connect** ()

Makes a connection to the Beanstalkd server



public  **put** (*mixed* $data, [*array* $options])

Puts a job on the queue using specified tube.



public  **reserve** ([*mixed* $timeout])

Reserves/locks a ready job from the specified tube.



public  **choose** (*mixed* $tube)

Change the active tube. By default the tube is "default".



public  **watch** (*mixed* $tube)

The watch command adds the named tube to the watch list for the current connection.



public  **ignore** (*mixed* $tube)

It removes the named tube from the watch list for the current connection.



public  **pauseTube** (*mixed* $tube, *mixed* $delay)

Can delay any new job being reserved for a given time.



public  **kick** (*mixed* $bound)

The kick command applies only to the currently used tube.



public  **stats** ()

Gives statistical information about the system as a whole.



public  **statsTube** (*mixed* $tube)

Gives statistical information about the specified tube if it exists.



public  **listTubes** ()

Returns a list of all existing tubes.



public  **listTubeUsed** ()

Returns the tube currently being used by the client.



public  **listTubesWatched** ()

Returns a list tubes currently being watched by the client.



public  **peekReady** ()

Inspect the next ready job.



public  **peekBuried** ()

Return the next job in the list of buried jobs.



public  **peekDelayed** ()

Return the next job in the list of buried jobs.



public  **jobPeek** (*mixed* $id)

The peek commands let the client inspect a job in the system.



final public  **readStatus** ()

Reads the latest status from the Beanstalkd server



final public  **readYaml** ()

Fetch a YAML payload from the Beanstalkd server



public  **read** ([*mixed* $length])

Reads a packet from the socket. Prior to reading from the socket will
check for availability of the connection.



public  **write** (*mixed* $data)

Writes data to the socket. Performs a connection if none is available



public  **disconnect** ()

Closes the connection to the beanstalk server.



public  **quit** ()

Simply closes the connection.




<hr>

# Class **Phalcon\Queue\Beanstalk\Exception**

*extends* class [Phalcon\Exception](Phalcon_Exception.md)

*implements* [Throwable](https://php.net/manual/en/class.throwable.php)

<a href="https://github.com/phalcon/cphalcon/tree/v3.4.0/phalcon/queue/beanstalk/exception.zep" class="btn btn-default btn-sm">Source on GitHub</a>

## Methods
final private [Exception](https://php.net/manual/en/class.exception.php) **__clone** () inherited from [Exception](https://php.net/manual/en/class.exception.php)

Clone the exception



public  **__construct** ([*mixed* $message], [*mixed* $code], [*mixed* $previous]) inherited from [Exception](https://php.net/manual/en/class.exception.php)

Exception constructor



public  **__wakeup** () inherited from [Exception](https://php.net/manual/en/class.exception.php)

...


final public *string* **getMessage** () inherited from [Exception](https://php.net/manual/en/class.exception.php)

Gets the Exception message



final public *int* **getCode** () inherited from [Exception](https://php.net/manual/en/class.exception.php)

Gets the Exception code



final public *string* **getFile** () inherited from [Exception](https://php.net/manual/en/class.exception.php)

Gets the file in which the exception occurred



final public *int* **getLine** () inherited from [Exception](https://php.net/manual/en/class.exception.php)

Gets the line in which the exception occurred



final public *array* **getTrace** () inherited from [Exception](https://php.net/manual/en/class.exception.php)

Gets the stack trace



final public [Exception](https://php.net/manual/en/class.exception.php) **getPrevious** () inherited from [Exception](https://php.net/manual/en/class.exception.php)

Returns previous Exception



final public [Exception](https://php.net/manual/en/class.exception.php) **getTraceAsString** () inherited from [Exception](https://php.net/manual/en/class.exception.php)

Gets the stack trace as a string



public *string* **__toString** () inherited from [Exception](https://php.net/manual/en/class.exception.php)

String representation of the exception




<hr>

# Class **Phalcon\Queue\Beanstalk\Job**

<a href="https://github.com/phalcon/cphalcon/tree/v3.4.0/phalcon/queue/beanstalk/job.zep" class="btn btn-default btn-sm">Source on GitHub</a>

Represents a job in a beanstalk queue


## Methods
public  **getId** ()





public  **getBody** ()





public  **__construct** ([Phalcon\Queue\Beanstalk](Phalcon_Queue.md) $queue, *mixed* $id, *mixed* $body)





public  **delete** ()

Removes a job from the server entirely



public  **release** ([*mixed* $priority], [*mixed* $delay])

The release command puts a reserved job back into the ready queue (and marks
its state as "ready") to be run by any client. It is normally used when the job
fails because of a transitory error.



public  **bury** ([*mixed* $priority])

The bury command puts a job into the "buried" state. Buried jobs are put into
a FIFO linked list and will not be touched by the server again until a client
kicks them with the "kick" command.



public  **touch** ()

The `touch` command allows a worker to request more time to work on a job.
This is useful for jobs that potentially take a long time, but you still
want the benefits of a TTR pulling a job away from an unresponsive worker.
A worker may periodically tell the server that it's still alive and processing
a job (e.g. it may do this on `DEADLINE_SOON`). The command postpones the auto
release of a reserved job until TTR seconds from when the command is issued.



public  **kick** ()

Move the job to the ready queue if it is delayed or buried.



public  **stats** ()

Gives statistical information about the specified job if it exists.



public  **__wakeup** ()

Checks if the job has been modified after unserializing the object
